/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function (s) {
    let M = s.length
    
    let lps = new Array(M).fill(0)
    let len = 0
    let i = 1


    while (i < M) {
        if (s[i] === s[len]) {
            len++
            lps[i] = len
            i++
        } else {
            if (len !== 0) {
                len = lps[len - 1]
            } else {
                lps[i] = 0
                i++
            }
        }
    }
  
    
    return s.slice(0 , lps[M - 1])
};
