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
var sumOfLeftLeaves = function(root) {
    if(!root) return 0 
    let  isLeft = false

    return dfs(root ,isLeft ) 
    
};

function dfs(node , isLeft) {
    if(!node ) return 0 

    if(node.left === null && node.right === null && isLeft)  {
        return node.val
    }
    return dfs(node.left , true) + dfs(node.right ,  false)

}