/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let start = 0 
    let min = Infinity
    let sum = 0 
    for(let i = 0 ;i < nums.length;i++) {
        sum += nums[i]
        while(sum >= target) {
            min = Math.min(min, i - start + 1) 
            sum -= nums[start]
            start++
        }
    }

    return min === Infinity ? 0 : min
    
};