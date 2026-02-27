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
 * @param {number} limit
 * @return {TreeNode}
 */
var sufficientSubset = function(root, limit) {
    return dfs(root, 0 , limit)
};

function dfs(node , currentSum , limit) {
    if(node === null ) return null

    currentSum = currentSum + node.val

    if(node.left === null && node.right=== null) {
        return currentSum < limit ? null : node
    }

    node.left = dfs(node.left, currentSum,limit)
    node.right = dfs(node.right, currentSum,limit)

    if(node.left === null && node.right === null) {
        return  null 
    }

    return  node 

}