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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true 

    return dfs(root.left , root.right)
};

function dfs(left, right) {
    if(!left && !right) {
        return true
    }

     if(!left || !right) {
        return false
    }

    if(left.val !== right.val) {
        return false 
    }

    if(!dfs(left.left, right.right)) {
        return false
    }

    return dfs(left.right, right.left)
}