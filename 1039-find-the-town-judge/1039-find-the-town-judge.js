/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    // let inDegree = Array(n+1).fill(0)
    // let outDegree = Array(n + 1).fill(0)

    // for(let p of trust) {
    //     outDegree[p[0]]++;
    //     inDegree[p[1]]++;
        
    // }

    // for(let i = 1 ; i <= n ; i++) {
    //     if(inDegree[i] === n - 1 && outDegree[i] === 0 ) {
    //         return i
    //     }
    //  }
   
    // return -1

      let scores = Array(n+1).fill(0)
    for(let [i, j] of trust) {
        scores[i]--
        scores[j]++
    }
    
    for(let i = 1 ; i <=n ; i++) {
        if(scores[i] === n - 1) {
            return i
        }
    }
    return -1
};