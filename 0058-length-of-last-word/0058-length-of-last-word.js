/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let sArr = s.split(" ").filter(e => e != "")
    return sArr[sArr.length - 1].length
};