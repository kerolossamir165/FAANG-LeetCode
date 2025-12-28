/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = []

    backtrack(nums , [] , {} , res )
    return res 
    
};

function backtrack(nums , candidate , used , res ) {
    if(candidate.length === nums.length) {
        res.push([...candidate])
        return 
    }

    for(let num of nums ) {

        if(!used[num]) {
            candidate.push(num)
            used[num] = true
            backtrack(nums , candidate, used , res)

            candidate.pop()
            delete used[num]
        }
    }
}