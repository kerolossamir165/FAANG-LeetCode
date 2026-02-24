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
var diameterOfBinaryTree = function(root) {
    let diameter = 0 
   function getDiameter(node) {

        if(node === null) return 0 

        let left = getDiameter(node.left)
        let right = getDiameter(node.right)

        let currentDiameter = left + right

        diameter = Math.max(diameter , currentDiameter)

        return  1 + Math.max(left, right);
    }
    getDiameter(root);

    return diameter;
};