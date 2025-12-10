/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {  '(': ')' , '{': '}', '[' : ']' } 
    let stack = []

    for(let c of s ) {
        if(map[c]) {
            stack.push(c)
        } else {
            if(stack.length > 0 && map[stack[stack.length - 1]] === c) {
                stack.pop()
            } else {
                return false 
            }
        }
    }
    return stack.length === 0
};