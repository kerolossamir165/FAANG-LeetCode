/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
  
    
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if(s[i] === "(") {
            stack.push("(")
        } else if (s[i] === ")") {
            if (stack[stack.length - 1] === "(") {
                stack.pop()
                continue
            }
            stack.push(s[i])
        }
    }
    
    return stack.length
     
};