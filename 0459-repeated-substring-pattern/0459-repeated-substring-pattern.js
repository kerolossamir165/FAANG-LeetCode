/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let lps = Array(s.length).fill(0);
    let len = 0;

    for(let i = 1 ; i < s.length ; i++) {
        while(len > 0 && s[i] !== s[len]) {
            len = lps[len - 1]
        } 
        if (s[i] === s[len]){
            len++
            lps[i] = len
        }   
    }
    let longestPrefix = lps[s.length - 1]
    let repeatedUnit = s.length - longestPrefix
    return longestPrefix > 0 &&  (s.length % repeatedUnit) === 0
};