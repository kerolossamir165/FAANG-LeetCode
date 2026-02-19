/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {

    if (!root) return []
    let queue = [root]

    let result = []

    while (queue.length > 0) {
        let levelSize = queue.length
        let values = []
        for (let i = 0; i < levelSize; i++) {

            let node = queue.shift()

            values.push(node.val)

            for(let child of node.children) {
                queue.push(child)
            }
        }
        result.push(values)
    }
    return result
}
