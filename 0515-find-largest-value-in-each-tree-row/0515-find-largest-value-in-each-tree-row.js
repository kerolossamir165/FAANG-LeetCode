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
 * @return {number[]}
 */
var largestValues = function (root) {
    if(!root) return []
    let result = []
    let queue = [root]

    while (queue.length) {
        let level = queue.length
        let levelMax = -Infinity

        for (let i = 0; i < level; i++) {
            let node = queue.shift()

            levelMax = Math.max(node.val , levelMax)
            if (node.left) {
                queue.push(node.left)
            }

            if (node.right) {
                queue.push(node.right)
            }
        }
        result.push(levelMax)
    }
    return result

};