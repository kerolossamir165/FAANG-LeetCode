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

    // return check(root, null , null)
    //null is coerced to 0 in numeric comparisons. so we pass infinity
    return check2(root ,-Infinity, Infinity);
};

var check2 = function (node , lower , higher) {
    if(!node) return true 

    if(!(lower < node.val && node.val < higher)) {
        return false 
    }

    if(!check2(node.left , lower , node.val)) return false 

    if(!check2(node.right , node.val , higher)) return false

    return true
}
