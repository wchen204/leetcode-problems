// Date: 2025-03-03
// Name: 2161. Partition Array According to Given Pivot
// Problem: Given an array of integers and a pivot element index, partition the array such that all elements less than the pivot element come before it, all elements equal to the pivot element come after it, and all elements greater than the pivot element come after that. The order of the elements should be preserved.
// Url: https://leetcode.com/problems/partition-array-according-to-given-pivot?envType=daily-question&envId=2025-03-03

// My solution:
/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {

    const lessThanPivot = [];
    const equalToPivot = [];
    const greaterThanPivot = [];
    let result;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            lessThanPivot.push(nums[i]);
        } else if (nums[i] === pivot) {
            equalToPivot.push(nums[i]);
        } else {
            greaterThanPivot.push(nums[i]);
        }
    }

    result = [...lessThanPivot, ...equalToPivot, ...greaterThanPivot];
    return result;
};

// const nums = [9, 12, 3, 5, 14, 10, 10];
// const pivot = 10;
// console.log(pivotArray(nums, pivot)); // [9, 3, 5, 10, 10, 12, 14]