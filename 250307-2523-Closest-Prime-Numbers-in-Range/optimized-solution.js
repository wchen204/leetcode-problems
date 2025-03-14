/**
 * Explanation:
 * This solution uses the Sieve of Eratosthenes, which is much more efficient for finding prime numbers in a range.
 *
 * Sieve of Eratosthenes Implementation:
 * - Create a boolean array `sieve` of size `right + 1`, initially all set to `true`.
 * - For each number `i` starting from 2 up to `sqrt(right)`: If `i` is prime (`sieve[i]` is `true`), mark all its multiples as non-prime.
 * - After the sieve operation, `sieve[i]` is `true` if and only if `i` is prime.
 *
 * Collecting Primes:
 * - We collect all numbers in the range `[left, right]` that are marked as prime in our sieve.
 *
 * Finding the Closest Pair:
 * - Iterate through consecutive pairs of primes to find the minimum gap.
 * - If we find a pair with a smaller gap, update our result.
 *
 * Complexity:
 * - Time complexity: O(right * log(log(right)))
 * - Space complexity: O(right)
 */
var closestPrimes = function(left, right) {
    // Creates a new array called sieve with a length of right + 1 and initializes all its elements to true.
    // This array is used to implement the Sieve of Eratosthenes algorithm, where each index represents whether the corresponding number is prime (true) or not (false).
    // Initially, all numbers are assumed to be prime (true), and the algorithm will later mark non-prime numbers as false.
    let sieve = new Array(right + 1).fill(true);
    sieve[0] = sieve[1] = false; // 0 and 1 are not prime numbers by definition.


    for (let i = 2; i * i <= right; i++) { // Iterate through numbers starting from 2 up to the square root of right.
        if (sieve[i]) { // If the current number is prime (sieve[i] is true), mark all its multiples as non-prime.
            for (let j = i * i; j <= right; j += i) { // Start from i^2 and increment by i to mark all multiples of i as non-prime. This is more efficient than starting from 2 * i.
                // For example, when i = 2, we mark 4, 6, 8, 10, ... as non-prime. j += i is equivalent to j = j + i => j = i * i, i * i + i, i * i + 2i, i * i + 3i, ...
                // This way, we avoid marking numbers like 6, 9, 12, ... as non-prime, which are already marked by the multiples of 2.
                // This optimization is the key to the efficiency of the Sieve of Eratosthenes algorithm.
                sieve[j] = false;
            }
        }
    }

    let primes = []; // Array to store all prime numbers in the range [left, right].
    for (let i = left; i <= right; i++) { // Iterate through the range [left, right].
        if (sieve[i]) { // If the number is prime (sieve[i] is true), add it to the primes array.
            primes.push(i);
        }
    }


    if (primes.length < 2) {
        return [-1, -1];
    }

    // Initialize minGap to Infinity and result to [-1, -1].
    let minGap = Infinity;
    let result = [-1, -1];

    // Iterate through consecutive pairs of prime numbers to find the pair with the smallest gap.
    for (let i = 1; i < primes.length; i++) { // Start from the second prime number.
        let gap = primes[i] - primes[i - 1]; // Calculate the gap between consecutive prime numbers.
        if (gap < minGap) { // If the current gap is smaller than the minimum gap found so far, update the result.
            minGap = gap; // Update the minimum gap.
            result = [primes[i - 1], primes[i]];
        }
    }

    return result;
};