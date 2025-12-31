/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = []
    candidates.sort((a, b) => a - b); 
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
        if (i > index && candidates[i] === candidates[i - 1]) continue;
        compination.push(candidates[i])
        dfs(compination, i + 1, candidates , target - candidates[i], res)
        compination.pop()

    }
}