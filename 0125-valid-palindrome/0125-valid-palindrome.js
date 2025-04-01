/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/\W|_/g, "");
    let left = 0 
    let right = s.length - 1
    while(left < right ) {
        if(s[left] === s[right]) {
            left++
            right--
        } else {
            return false
        }
    }
    return true
    
};