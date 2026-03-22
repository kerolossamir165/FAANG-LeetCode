/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    
const stack = [];
    let num = 0;
    let prevOp = '+';  // Previous operator (start with '+' so first number gets pushed)

    for (let i = 0; i <= s.length; i++) {
        const ch = s[i];

        if (ch >= '0' && ch <= '9') {
            num = num * 10 + Number(ch);   // Build multi-digit number
            continue;
        }

        if (ch === ' ' && i < s.length) continue;  // Skip spaces

        // We hit an operator or end of string — process the PREVIOUS operator
        if (prevOp === '+') stack.push(num);
        else if (prevOp === '-') stack.push(-num);
        else if (prevOp === '*') stack.push(stack.pop() * num);
        else if (prevOp === '/') stack.push(Math.trunc(stack.pop() / num));

        prevOp = ch;
        num = 0;
    }

    // Sum everything in the stack
    return stack.reduce((sum, val) => sum + val, 0);
}

    