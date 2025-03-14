// Name: Alternating Groups II
// Date: 2025-03-09
// Problem: You are given a list of integers colors and an integer k. You are asked to determine the number of alternating groups of size k in colors. An alternating group is a group of k colors where no two adjacent colors are the same. Return the number of alternating groups of size k in colors.
// Url: https://leetcode.com/problems/alternating-groups-ii/

// My solution: Time Limit Exceeded
/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors, k) {
    let alternatingGroups = 0
    const updatedColors = [...colors, ...colors.slice(0, k)]

    for (let i = 0; i < updatedColors.length; i++) {

        for (let j = 0; j < k; j++) {
            if (updatedColors[i + j + 1] === undefined) break;

            if (j === k - 1) {
                alternatingGroups++
            }

            if (updatedColors[i + j] === updatedColors[i + j + 1]) {
                break
            }
        }

    }

    return alternatingGroups

};

// console.log(numberOfAlternatingGroups([0,1,0,0,1,0,1], 6))
console.log(numberOfAlternatingGroups([0, 1, 0, 1, 0], 3))
