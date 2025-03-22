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
 * @return {boolean}
 */
var isValidBST = function(root) {
     function check(root, min , max) {
        
        if(root === null) return true 
    
        if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
            return false;
        }
         
        return check(root.left , min, root.val) && check(root.right, root.val, max)
    }

    return check(root, null , null)
};

