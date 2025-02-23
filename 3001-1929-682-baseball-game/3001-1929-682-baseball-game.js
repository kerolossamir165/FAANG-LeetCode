/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let stack = []
    let sum = 0

    for (let i = 0; i < operations.length; i++) {
        
        if (operations[i] === "C") {
            stack.pop()
        } else if (operations[i] === "D") {
            let num = stack.pop()
            let doubleNum = num * 2
            stack.push(num)
            stack.push(doubleNum)
        } else if (operations[i] === "+") {
            let first = stack.pop()
            let second = stack.pop()
            let sum = second + first
            stack.push(second)
            stack.push(first)
            stack.push(sum)
        } else {
            stack.push(parseInt(operations[i]))
        }
    }
    for (let k = 0; k < stack.length; k++) {
        sum += stack[k]
    }
    return sum
};