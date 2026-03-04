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
var goodNodes = function(root) {
    return dfs(root, root.val)
};

function dfs(node , max ) {
    if(node === null) {
        return 0
    }
    let count = node.val >= max ? 1 : 0 

    max = Math.max(node.val , max )
    count += dfs(node.left, max)
    count += dfs(node.right , max )
    return count
} 