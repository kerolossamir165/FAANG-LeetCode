/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let pointer = 0 
    for(let i = 0 ; i < nums.length ; i++) {
        if(nums[i] % 2 === 0 ) {
            [nums[pointer], nums[i]] = [nums[i], nums[pointer]]
            pointer++
        }
    }
    return nums
    
};