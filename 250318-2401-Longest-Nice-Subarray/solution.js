/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    let left = 0;
    let mask = 0;
    let maxLen = 0;

    for (let right = 0; right < nums.length; right++) {
        // While bits overlap with the current mask, move left pointer
        while ((mask & nums[right]) !== 0) {
            mask ^= nums[left];  // Remove nums[left]'s bits from the mask
            left++;
        }
        mask |= nums[right];  // Add nums[right]'s bits to the mask
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
