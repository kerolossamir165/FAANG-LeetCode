/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    let result = []

    function backtracking(index , current) {
        if(index === s.length) {
            result.push(current) 
            return 
        }


        let char = s[index]

        if(char >= "0" && char <= "9") {
            
            backtracking(index + 1 , current + char)

        } else {
            backtracking(index + 1 , current + char.toLowerCase())

            backtracking(index + 1 , current + char.toUpperCase())

        }
    }

    backtracking(0 , '')
    return result
};