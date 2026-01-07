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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return []
    const result = [];
    const queue = [root];
    let leftToRight = true; 

    while(queue.length) {
        let level = queue.length 
        let levelNodes = []

        for(let i = 0 ; i < level ; i++) {
            let node = queue.shift()

            levelNodes.push(node.val)

            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        if(!leftToRight) {
            levelNodes.reverse()
        }
        result.push(levelNodes);
        leftToRight = !leftToRight;
    }
    return result
};