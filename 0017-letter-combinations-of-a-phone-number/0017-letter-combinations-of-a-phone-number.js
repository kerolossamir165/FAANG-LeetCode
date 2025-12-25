/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let keypad_map = {
    '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
    '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    }
    let res = []

    backtrack(0, [] , digits , keypad_map, res )

    return res
};


function backtrack(i , compination , digits , keypad_map, res ) {

    if(compination.length === digits.length) {
        res.push(compination.join(""))
        return 
    }

    for(let char of keypad_map[digits[i]]) {
        compination.push(char)
        backtrack(i+1,compination  , digits , keypad_map, res )
        compination.pop()
    }
}


