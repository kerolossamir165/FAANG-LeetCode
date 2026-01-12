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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let count = 0
    let prefex = new Map() 
    prefex.set(0 , 1)

    function dfs(node, currSum) {
        if(!node) return 
        currSum += node.val 

        if(prefex.has(currSum - targetSum)) {
            count += prefex.get(currSum - targetSum)
        }
        prefex.set(currSum , (prefex.get(currSum) || 0) + 1)
        dfs(node.left , currSum)
        dfs(node.right , currSum)
        prefex.set(currSum, prefex.get(currSum) - 1);
    }
    dfs(root, 0)
    return count
    
};