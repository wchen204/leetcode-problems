// Name: Find Missing and Repeated Values
// Date: 2025-03-06
// Problem: You are given a 0-indexed 2D integer matrix grid of size n * n with values in the range [1, n2]. Each integer appears exactly once except a which appears twice and b which is missing. The task is to find the repeating and missing numbers a and b. Return a 0-indexed integer array ans of size 2 where ans[0] equals to a and ans[1] equals to b.
// Url: https://leetcode.com/problems/find-missing-and-repeated-values/


// My solution:
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {

    let merged = [];
    const temp = [];
    const result = []

    grid.map(arr=> {
        merged = merged.concat(arr);
    });

    for (let i=0; i<merged.length; i++) {
        if (temp.includes(merged[i])) {
            result.push(merged[i]);
        }else{
            temp.push(merged[i]);
        }
    }

    for (let i=0; i<merged.length; i++) {
        if (!merged.includes(i+1)) {
            result.push(i+1);
        }
    }

    return result
};

// const grid = [[1,3],[2,2]]
// console.log(findMissingAndRepeatedValues(grid))