/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let windowSum = 0

    for(let i = 0 ; i < k ; i++ ) {
        windowSum += nums[i]
    } 

   let max = windowSum

    for(let i = k ; i < nums.length ;i++) {
        windowSum += nums[i] - nums[i - k]
        max = Math.max(max , windowSum)

    }
    return max / k
};