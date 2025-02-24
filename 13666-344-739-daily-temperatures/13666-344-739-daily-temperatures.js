/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = []
    let result = new Array(temperatures.length).fill(0);


    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            let j = stack.pop()
            result[j] = i - j
        }

        stack.push(i)

    }
    return result
};