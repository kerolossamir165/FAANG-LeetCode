/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack = []
    let ans = [...s]

    for (let i = 0; i < s.length; i++) {
        if (ans[i] === "(") {
            stack.push(i)
        } else if (s[i] === ")") {
            if (stack.length > 0) {
                stack.pop()
            } else {
                ans[i] = ""
            }
        }

    }


    while (stack.length >0) {
        ans[stack.pop()] = '';
    }

    return ans.join("")
    
};