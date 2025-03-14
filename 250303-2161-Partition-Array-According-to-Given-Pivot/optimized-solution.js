/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let result = new Array(nums.length).fill(0);
    let left = 0, right = nums.length - 1;

    for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
        if (nums[i] < pivot) {
            result[left] = nums[i];
            left++;
        }

        if (nums[j] > pivot) {
            result[right] = nums[j];
            right--;
        }
    }

    while (left <= right) {
        result[left] = pivot;
        left++;
    }

    return result;
};

const nums = [9, 12, 3, 5, 14, 10, 10];
const pivot = 10;
console.log(pivotArray(nums, pivot)); // [9, 3, 5, 10, 10, 12, 14]