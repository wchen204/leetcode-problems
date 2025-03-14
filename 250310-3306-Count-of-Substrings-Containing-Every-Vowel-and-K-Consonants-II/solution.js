// Name: Count of Substrings Containing Every Vowel and K Consonants II
// Date: 2025-03-10
// Problem: You are given a string word and an integer k. A substring is defined as a contiguous sequence of characters in a string. Return the number of substrings of word that:
// - Contain at least one occurrence of each vowel (a, e, i, o, u).
// - Contain exactly k consonants.
// Url: https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/


// My solution: Time Limit Exceeded
/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function (word, k) {

    const vowels = ["a", "e", "i", "o", "u"];
    const wordArr = word.split('')

    let vowelsFilter = vowels
    let count = 0
    let substringCount = 0
    let left = 0


    for (let i = 0; i < wordArr.length; i++) {

        vowelsFilter = vowelsFilter.filter(letter => letter !== wordArr[i])


        if (!vowels.includes(wordArr[i])) count++


        if (count === k && vowelsFilter.length === 0) {
            substringCount++
        }


        if (count > k || i === wordArr.length - 1) {
            vowelsFilter = vowels
            count = 0
            i = left;
            left++;
        }


    }
    return substringCount

};

// console.log(countOfSubstrings("iqeaouqi", 2))
