/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0
    for(let i = 0 ; i < nums.length ; i++ ) {
        let digit = 0
        let num = nums[i]
        while(num !== 0) {
            digit++
            num = Math.floor(num / 10)
              
        }
        if(digit % 2  === 0) {
            count++
        }
    }
    return count
    
};