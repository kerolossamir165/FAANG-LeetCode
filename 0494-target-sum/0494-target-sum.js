/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    // let result = 0 

    // function backtracking(index , sum) {
    //     if(index === nums.length) {
    //         if(sum === target) {
    //             result++
    //         }
    //         return 
    //     }

    //     backtracking(index + 1 , sum + nums[index])

    //     backtracking(index + 1 , sum - nums[index])

    // }
    // backtracking(0 , 0 )
    // return result 

let memo = new Map();

    function dfs(index, sum) {
        if (index === nums.length) {
            return sum === target ? 1 : 0;
        }

        let key = index + ',' + sum;
        if (memo.has(key)) return memo.get(key);

        let add = dfs(index + 1, sum + nums[index]);
        let subtract = dfs(index + 1, sum - nums[index]);

        memo.set(key, add + subtract);
        return memo.get(key);
    }

    return dfs(0, 0);
};


