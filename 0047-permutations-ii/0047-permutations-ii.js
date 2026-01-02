/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = []
    let count = {}

    for (let num of nums) {
        if (!(num in count)) count[num] = 0;
        count[num]++;
    }

    function backtrack(perm , n) {
        if(perm.length === n) {
            res.push([...perm])
            return 
        }

        for(let num in count) {
            if(count[num] === 0) continue
            perm.push(parseInt(num));
            count[num]--
            backtrack(perm,nums.length)
            count[num]++
            perm.pop()

        }

    }
    backtrack([],nums.length)
    return res  
};