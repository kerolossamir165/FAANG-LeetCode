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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let res = []

    function dfs(node, currSum , path) {
        if(!node) return 

        currSum += node.val 

        path.push(node.val)

        if(!node.left && !node.right && currSum === targetSum) {
            res.push([...path])
        }

        dfs(node.left , currSum , path)
        dfs(node.right , currSum , path)
        path.pop()
    }

    dfs(root, 0 , [])
    return res
};