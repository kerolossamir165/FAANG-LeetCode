/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let res = new Array(nums.length).fill(-1)
    let stack = []

    for (let i = 2* nums.length - 1; i >= 0; i--) {
        while(stack.length > 0 && stack[stack.length - 1] <= nums[i % nums.length]) {
            stack.pop()
        }
        if (i < nums.length) {
            res[i] = stack.length > 0 ? stack[stack.length - 1]  : -1
        }
        stack.push(nums[i % nums.length])
    }
    return res
};