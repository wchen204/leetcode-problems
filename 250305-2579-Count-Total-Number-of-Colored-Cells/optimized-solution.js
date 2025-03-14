// https://leetcode.com/problems/count-total-number-of-colored-cells/solutions/6499078/arithmetic-sequence-python-c-java-js-c-go-swift-kotlin

// The pattern of added cells follows an arithmetic sequence: 4, 8, 12, 16, ...
//
// This sequence can be represented as 4 * (1, 2, 3, 4, ...)
// For minute n, the number of added cells is 4 * (n-1)
// The total number of added cells is the sum of this sequence: 4 * (1 + 2 + ... + (n-1))
// This sum is calculated by the formula: 4 * ((n-1) * n / 2)
// Therefore, the total number of cells at minute n is: 1 + 4 * (n * (n-1) / 2)

// Sum of Natural Numbers Formula: 1 + 2 + ... + n = n * (n + 1) / 2

var coloredCells = function(n) {
    return 1 + 4 * n * (n - 1) / 2;
};