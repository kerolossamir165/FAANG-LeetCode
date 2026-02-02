/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let result = 0 

    function backtracking(index , sum) {
        if(index === nums.length) {
            if(sum === target) {
                result++
            }
            return 
        }

        backtracking(index + 1 , sum + nums[index])

        backtracking(index + 1 , sum - nums[index])

    }
    backtracking(0 , 0 )
    return result 
};