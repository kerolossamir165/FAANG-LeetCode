/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let arrNums = []
    let prevValue = 0 
    
    for(let i = 0 ; i < nums.length ; i++ ) {
        prevValue = nums[i] + prevValue
        
        arrNums.push(prevValue)
    }
    return arrNums
    
};