/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0 
    let max = 0
    let map = {}
    
    for(let i = 0 ; i < s.length ;i++) {
        while(map[s[i]]) {
            delete map[s[start]]
            start++
        }
        map[s[i]] = s[i]
        max = Math.max(max , i - start + 1)
    }
    return max 
};