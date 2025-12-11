/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stack = []
    let current = 0 , res = 0 , sign = 1 


    for(c of s) {

        if(!isNaN(c) && c !== " ") {
            current = 10 * current + parseInt(c , 10)
        } else if (c == "-" || c == "+") {
            res += current * sign 
            sign = (c === "-") ? -1 : 1 
            current = 0
        }else if (c === "(") {
            stack.push(res)
            stack.push(sign)
            res = 0 
            sign = 1
        } else if (c === ")") {
            res += current * sign 
            res *= stack.pop()
            res += stack.pop()
            current = 0 
        }
    }

    return res + current * sign 
    
};