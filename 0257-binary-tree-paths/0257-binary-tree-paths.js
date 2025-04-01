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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let list = []
    traverse(root,list, "")
    return list
};

function traverse(root, list, val) {
    if(!root) return null
    if(!root.left && !root.right) {
        list.push(val + root.val)
    }
    traverse(root.left , list, val + root.val+ "->")
    traverse(root.right , list, val + root.val + "->")
}