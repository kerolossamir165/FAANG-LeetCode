/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = []

    function backtrack(remain , compination , next) {
        if(remain === 0 ){
            result.push([...compination])
        }

        for(let i = next ; i <= n ; i++) {
            compination.push(i)
            backtrack(remain - 1 ,compination , i + 1)
            compination.pop()
        }
    }

    backtrack(k , [], 1)
    
    return result
}; 