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
 * @return {void} Do not return anything, modify root in-place instead.
 */

var recoverTree = function(root) {
let first = null 
let second = null 
let prev = null 
    function travers(node) {
        if(!node) return 

        travers(node.left)

        if(prev && node.val < prev.val ) {
            if(!first) {
                first = prev
                second = node
            } else {
                second = node
            }
        }
        prev = node
        travers(node.right)
    }

    travers(root)
    if(first && second) {
        let temp = first.val
        first.val = second.val 
            second.val = temp
    }
   return root 
};