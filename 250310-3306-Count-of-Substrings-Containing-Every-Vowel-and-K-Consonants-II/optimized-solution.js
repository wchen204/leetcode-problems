/**
 * 💡 Problem Breakdown
 * We are given a string `word` and an integer `k`.
 * We need to count the number of substrings that:
 * ✅ Contain every vowel at least once (a, e, i, o, u).
 * ✅ Have exactly `k` consonants.
 *
 * 🔍 Approach Explanation
 * 🔹 Sliding Window + Two Pointers: We expand the window until conditions are met, then shrink to find all valid substrings efficiently.
 * 🔹 Frequency Arrays: Used to track vowels and consonants efficiently.
 * 🔹 Extra Consonants Handling: We move left when consonants exceed `k`.
 * 🔹 Counting Extra Left: To count all substrings ending at `right` efficiently.
 *
 * ⏳ Complexity Analysis
 * Time Complexity: O(N), where N is the length of `word`.
 * Space Complexity: O(1), since we use fixed extra space.
 *
 * @param {string} word
 * @param {number} k
 * @returns {number}
 */
var countOfSubstrings = function (word, k) {
    // Initialize two frequency arrays to track vowels and their counts
    let frequencies = [new Array(128).fill(0), new Array(128).fill(0)];
    // Mark the vowels in the first frequency array
    "aeiou".split("").forEach(v => frequencies[0][v.charCodeAt(0)] = 1);

    // Initialize variables to keep track of the result, current consonant count, vowel count, extra left substrings, and the left pointer
    let response = 0, currentK = 0, vowels = 0, extraLeft = 0, left = 0;

    // Iterate through the string with the right pointer
    for (let right = 0; right < word.length; right++) {
        // Get the ASCII code of the current character
        let rightChar = word[right].charCodeAt(0);

        // Check if the current character is a vowel
        if (frequencies[0][rightChar] === 1) {
            // Increment the vowel count in the second frequency array
            if (++frequencies[1][rightChar] === 1) vowels++;
        } else {
            // Increment the consonant count
            currentK++;
        }

        // Shrink the window from the left if the consonant count exceeds k
        while (currentK > k) {
            let leftChar = word[left].charCodeAt(0);
            if (frequencies[0][leftChar] === 1) {
                // Decrement the vowel count in the second frequency array
                if (--frequencies[1][leftChar] === 0) vowels--;
            } else {
                // Decrement the consonant count
                currentK--;
            }
            left++;
            extraLeft = 0; // Reset extra left substrings count
        }

        // Count extra left substrings that still meet the conditions
        while (vowels === 5 && currentK === k && left < right && frequencies[0][word[left].charCodeAt(0)] === 1 && frequencies[1][word[left].charCodeAt(0)] > 1) {
            extraLeft++;
            frequencies[1][word[left].charCodeAt(0)]--;
            left++;
        }

        // If the current window meets the conditions, add the count of valid substrings ending at right
        if (currentK === k && vowels === 5) {
            response += (1 + extraLeft);
        }
    }

    // Return the total count of valid substrings
    return response;
};