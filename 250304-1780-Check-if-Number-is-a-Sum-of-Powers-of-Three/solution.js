// Name: Check if Number is a Sum of Powers of Three
// Date: 2025-03-04
// Problem: Given an integer n, return true if it is possible to represent n as the sum of distinct powers of three. Otherwise, return false.
// Url: https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/

// My solution:
/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
    while (n > 1) {
        if (n % 3 === 0 || n % 3 === 1) {
            n = Math.trunc(n / 3) // Math.trunc() returns the integer part of a number by removing any fractional digits.
        } else {
            return false
        }
    }
    return true;
};

// console.log(checkPowersOfThree(91))