// Name: Count Total Number of Colored Cells
// Date: 2025-03-05
// Problem: Given an integer n, return the total number of colored cells in an n x n grid. Cells are colored in a grid of size n x n if they are in the border or in the diagonal of the grid.
// Url: https://leetcode.com/problems/count-total-number-of-colored-cells/

// My solution:
/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function (n) {

    let num = 1;

    for (let i = 1; i < n; i++) {
        num += i * 4;
    }
    return num
}

// console.log(coloredCells(4))
