/**
 * Intuition
 * The problem requires finding alternating groups of length k. A key observation is that we can extend the array to simulate a cyclic sequence, ensuring we check all possible groups without worrying about wrapping around.
 *
 * Approach
 * 1. Extend the array:
 *    - Append the first (k-1) elements to the end of the array. This simulates a cyclic sequence, allowing us to check alternating groups that might wrap around.
 * 2. Sliding Window Technique:
 *    - Maintain two pointers: left and right, where right iterates over the array.
 *    - If two consecutive elements are the same, reset left = right, breaking the alternating sequence.
 *    - Whenever the window size reaches at least k, count it as a valid alternating group.
 *
 * Complexity
 * - Time complexity: O(n + k)
 * - Space complexity: O(k)
 */
var numberOfAlternatingGroups = function(colors, k) {
    colors.push(...colors.slice(0, k - 1)); // Extend the array by appending the first (k-1) elements to the end to simulate a cyclic sequence.
    let count = 0; // Initialize the count of alternating groups to 0.
    let left = 0; // Initialize the left pointer to the start of the array.

    for (let right = 0; right < colors.length; right++) { // Iterate over the array with the right pointer.
        if (right > 0 && colors[right] === colors[right - 1]) { // If the current element is the same as the previous one, reset the left pointer.
            left = right; // Reset the left pointer to the current position of the right pointer.
        }

        if (right - left + 1 >= k) { // If the window size is at least k, it means we have found a valid alternating group.
            count++; // Increment the count of alternating groups.
        }
    }

    return count; // Return the total count of alternating groups.
};

