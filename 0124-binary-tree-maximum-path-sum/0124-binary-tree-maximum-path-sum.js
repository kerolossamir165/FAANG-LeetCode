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

var maxPathSum = function(root) {
    let max = -Infinity

    function max_helper(node) {

        if(!node) return 0 

        let left_sum = Math.max(0 , max_helper(node.left))
        let right_sum = Math.max(0 , max_helper(node.right))

        max = Math.max(max, node.val + left_sum + right_sum)

        return node.val + Math.max(left_sum , right_sum)
    }
    max_helper(root)
    
    return max 
};

