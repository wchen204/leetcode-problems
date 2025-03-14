/**
 * Intuition
 * We use sliding window to solve this problem efficiently.
 *
 * Approach
 * Check each substring with the length of k.
 * Calculate count of 'W' for each one and take minimum result.
 *
 * @param {string} blocks
 * @param {number} k
 * @returns {number}
 */
var minimumRecolors = function(blocks, k) {
    let blackCount = 0, ans = blocks.length;
    // Start with zero black blocks counted.
    // Set the answer to the largest possible value (the length of all blocks).

    for (let i = 0; i < blocks.length; i++) {
        // Go through each block one by one from start to end.

        if (i - k >= 0 && blocks[i - k] === 'B') {}
        // When the sliding window moves, if a black block is leaving the window,
        // subtract 1 from the count of black blocks.

        if (blocks[i] === 'B') blackCount++;
        // If the block we just added to the window is black, add 1 to the black count.

        ans = Math.min(ans, k - blackCount);
        // Calculate how many white blocks need to be turned black:
        // If we need 'k' black blocks but only have 'blackCount',
        // the rest need to be recolored.
        // Keep the smallest number of recolors needed as the answer.
    }

    return ans;
    // Return the best (smallest) number of recolors needed to make any group of k blocks all black.
};


console.log(minimumRecolors("WBBWWBBWBW",7));