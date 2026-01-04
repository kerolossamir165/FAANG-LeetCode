/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let result = []

    function backtrack(remain , compination , next) {
        if(remain === 0 && compination.length === k ){
            result.push([...compination])
            return
        }

        if (remain < 0 || compination.length > k) return;

        for(let i = next ; i <= 9 ; i++) {
            compination.push(i)
            backtrack(remain - i ,compination , i + 1)
            compination.pop()
        }
    }

    backtrack(n , [], 1)
    
    return result
}; 