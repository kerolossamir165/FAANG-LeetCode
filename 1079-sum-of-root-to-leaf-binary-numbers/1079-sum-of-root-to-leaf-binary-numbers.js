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
var sumRootToLeaf = function(root) {
    return dfs(root, 0)
};

function dfs(node , currentSum) {
    if(node === null ) return 0

    currentSum = currentSum *2 + node.val

    if(node.left === null && node.right === null) return currentSum 

    return dfs(node.left, currentSum) + dfs(node.right , currentSum)
}