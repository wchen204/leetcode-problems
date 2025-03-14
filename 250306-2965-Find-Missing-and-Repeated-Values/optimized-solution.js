/**
 * 📚 Solution 1 (Counting)
 *
 * Intuition:
 * The key insight is that we can use a counting approach. If we count the frequency of each number, the one with frequency 2 is our repeated number, and the one with frequency 0 is our missing number.
 *
 * Approach:
 * 1. Calculate the total number of elements expected (n²).
 * 2. Create a frequency counter for numbers 1 to n².
 * 3. Iterate through the grid and count the occurrences of each number.
 * 4. Identify the number that appears twice (frequency = 2) as 'a'.
 * 5. Identify the number that is missing (frequency = 0) as 'b'.
 * 6. Return [a, b].
 *
 * Complexity:
 * - Time complexity: O(n²)
 * - Space complexity: O(n²)
 *
 * @param grid
 * @returns {[number, number]}
 */

var findMissingAndRepeatedValues = function(grid) {
    let n = grid.length;
    let size = n * n;
    let count = new Array(size + 1).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            count[grid[i][j]]++;
        }
    }

    let a = -1, b = -1;

    for (let num = 1; num <= size; num++) {
        if (count[num] === 2) {
            a = num;
        } else if (count[num] === 0) {
            b = num;
        }
    }

    return [a, b];
};