/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

function buildLPS(pattern) {
    let n = pattern.length
    let lps = Array(n).fill(0)
    let i = 1
    let len = 0 

    while( i < n) {
        if(pattern[i] === pattern[len]){
            len++
            lps[i] = len
            i++
        }
        if(pattern[i] !== pattern[len]) {
            if(len > 0) {
               len = lps[len - 1] 
            } else {
                lps[i] = 0
                i++
            }
        }
    }
    return lps

}

var strStr = function(haystack, needle) {
    if(!needle) return 0

    let lps = buildLPS(needle)

    let i = 0
    let j = 0

    while(i < haystack.length) {
        if(haystack[i] === needle[j]) {
            i++
            j++
        }

        if(j === needle.length) {
            return i - j
        } else if (haystack[i] !== needle[j]) {
            if(j > 0) {
                j = lps[j -1]
            } else {
                i++
            }
        }
    }
    return -1
    
};