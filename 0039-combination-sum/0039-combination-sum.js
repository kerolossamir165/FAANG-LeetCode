/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = []
    dfs([], 0, candidates, target, res)
    return res
};

function dfs(compination , index , candidates , target, res) {
    if (target === 0) {
        res.push([...compination])
        return 
    }

    if(target < 0) {
        return 
    }

    for(let i = index ; i < candidates.length ; i++) {
        compination.push(candidates[i])
        dfs(compination, i, candidates , target - candidates[i], res)
        compination.pop()

    }
}