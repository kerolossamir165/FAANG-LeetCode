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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let list = []

    traverse(root, list)
    return list 
};

function traverse(node, list) {
    if(node !== null) {
        traverse(node.left, list)
        list.push(node.val)
        traverse(node.right, list)
    }
}