/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // let map = {}

    // for(let i = 0 ; i < nums.length ; i++) {
    //     if(map[nums[i]]) {
    //         map[nums[i]]++
    //     } else {
    //         map[nums[i]] = 1
    //     }

    //     if(map[nums[i]] >= 2) {
    //         return true 
    //     }
    // }
    // return false
    nums.sort((a,b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i+1]) {
            return true 
        }
    }  
    return false
};