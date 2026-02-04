/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {

    let res = []
    nums.sort((a, b) => a - b)

    backtrack(0, [], nums, res)

    return res
};

function backtrack(i, candidate, nums, res) {

    res.push([...candidate])

    for(let j = i ; j < nums.length ; j++) {
        if(j > i && nums[j] === nums[j-1]) {
            continue
        }

        candidate.push(nums[j])

        backtrack(j + 1, candidate, nums, res)
        
        candidate.pop()

    }

}
