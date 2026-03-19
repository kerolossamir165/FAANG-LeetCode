/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
        const result = [];

    for (let i = 0; i < nums.length; i++) {
        const idx = Math.abs(nums[i]) - 1;  // Use abs because value might be negated

        if (nums[idx] < 0) {
            result.push(Math.abs(nums[i]));  // Already seen → duplicate
        } else {
            nums[idx] = -nums[idx];           // Mark as seen
        }
    }

    return result;
};