/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxHere = nums[0]
    let maxSoFar = nums[0]

    for(let i = 1; i < nums.length ; i++) {
        maxHere = Math.max(nums[i] , maxHere + nums[i])
        maxSoFar = Math.max(maxSoFar, maxHere)
    }
    return maxSoFar
    
};