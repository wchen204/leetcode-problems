// Name: Minimum Recolors to Get K Consecutive Black Blocks
// Date: 2025-03-08
// Problem: You are given a string blocks consisting of letters 'W' and 'B' representing white and black blocks, respectively. You are also given an integer k. You can choose any k consecutive blocks and change them to black. Return the minimum number of recolors needed to get k consecutive black blocks.
// Url: https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/


/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    const blocksArr = blocks.split("");

    // let operations = Infinity;
    let operations = blocks.length; // Maximum possible value
    for (let i = 0; i+k<= blocksArr.length; i++) {
        let subArr = blocksArr.slice(i, i+k);
        let count = subArr.filter(item => item === "W").length;

        if (count <= operations){
            operations = count;
        }
    }
    return operations;
};


// console.log(minimumRecolors("BWWWBB", 6));
console.log(minimumRecolors("WBBWWBBWBW",7));