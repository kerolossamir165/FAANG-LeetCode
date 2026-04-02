/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let maxArea = 0
    let stack = []

    for (let [i, h] of heights.entries()) {
        let start = i

        while (stack.length && stack[stack.length - 1][1] > h) {
            let [index, height] = stack.pop()
            maxArea = Math.max(maxArea, height * (i - index))
            start = index
        }
        stack.push([start , h])
    }

    for (let [i, h] of stack) {
        maxArea = Math.max(maxArea, h * (heights.length - i))

    }
    return maxArea
};