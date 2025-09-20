/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let newNums = nums.map(el => Math.pow(el, 2))
    return newNums.sort((a, b ) => a - b)
    
};