/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function swap(arr , i , j ) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

var sortColors = function(nums) {
    let low = 0 
    let pointer = 0
    let hi = nums.length - 1 

    while(pointer <= hi) {
        if(nums[pointer] === 0) {
            swap(nums, low , pointer)
            low++
            pointer++
        } else if (nums[pointer] === 1) {
            pointer++
        } else {
            swap(nums, pointer , hi)
            hi--
        }
    }
    return nums
};