/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let result = 0 
    let current = 0 
    for(let num of nums ) {
        if(num === 1) {
            current++
            result = Math.max(result , current)
        } else {
            current = 0
        }
    }
    return result
};