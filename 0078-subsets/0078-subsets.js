/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = []

    backtrack(0 , [], nums , res )

    return res
    
};

function backtrack(i , candidate , nums , res) {
    if( i === nums.length ) {
        res.push([...candidate])
        return 
    }

    candidate.push(nums[i])
    backtrack(i+1 , candidate, nums , res )
    candidate.pop()

    backtrack(i+1 , candidate, nums , res )

}

