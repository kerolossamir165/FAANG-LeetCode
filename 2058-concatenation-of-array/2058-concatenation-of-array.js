/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    // let ans = [...nums]
    // for(let i = 0 ; i < nums.length ; i++) {
    //     ans.push(nums[i])
    // }
    // return ans
    let ans = []
    for(let i = 0 ; i < 2 ; i++) {
        for(let num of nums) {
            ans.push(num)
        }
    }
    return ans
    
};