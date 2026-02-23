/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {

    if (!root) return 0
    let queue = [root]
    let result = 0
    let currentLevel = 1
    let maxSoFar = -Infinity

    while (queue.length) {
        let level = queue.length
        let currentMax = 0

        for (let i = 0; i < level; i++) {
            let node = queue.shift()
            let max = 0
            currentMax += node.val

            if (node.left) {
                queue.push(node.left)
            }

            if (node.right) {
                queue.push(node.right)
            }
        }
        if (currentMax > maxSoFar) {
            maxSoFar = currentMax
            result = currentLevel
        }
        currentLevel++
    }
    return result

};