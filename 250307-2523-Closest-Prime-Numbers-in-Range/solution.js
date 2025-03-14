// Name: Closest Prime Numbers in Range
// Date: 2025-03-07
// Problem: Given two integers left and right, return an array of two integers containing the two closest prime numbers in the range [left, right]. If there are multiple solutions, return the solution with the smallest difference between the two prime numbers. If there are no prime numbers in the range, return [-1, -1].
// Url: https://leetcode.com/problems/closest-prime-numbers-in-range/

// My solution: Time Limit Exceeded
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {

    if (right - left < 2)   return [-1,-1];
    const isPrime = num => {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if(num % i === 0) return false;
        }
        return num > 1;
    }

    const primes = [];


    for (let i = left; i<= right; i++){
        if (isPrime(i)){
            primes.push(i);
        }
    }

    if (primes.length < 2){
        return [-1,-1];
    }

    let minDiff = Infinity;
    let result = [];
    for (let i = 0; i<primes.length; i++){
        for (let j = i+1; j<primes.length; j++){
            if (Math.abs(primes[i]-primes[j]) < minDiff){
                minDiff = Math.abs(primes[i]-primes[j]);
                result = [primes[i],primes[j]];
            }
        }
    }
    return result;
};

console.log(closestPrimes(19,31))
