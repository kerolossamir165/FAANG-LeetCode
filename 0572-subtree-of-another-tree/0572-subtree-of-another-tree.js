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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(root === null) return false 
    if (isSame(root, subRoot)) return true

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

function isSame(firstRoot , secondRoot) {
    if(firstRoot === null && secondRoot === null) return true 
    if(firstRoot === null || secondRoot === null) return false 

    if(firstRoot.val !== secondRoot.val) return false

    return isSame(firstRoot.left, secondRoot.left) && isSame(firstRoot.right, secondRoot.right);
}
