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
 * @param {number} val
 * @return {TreeNode}
 */
function compare(x, y) {
        if (x > y) return 1
        else if (x < y) return -1
        else return 0
}

function getValue(root , val) {   
    while(root !== null) {
       let com = compare(val , root.val) 
        if(com < 0 ) {
            root = root.left, val
        } else if(com > 0 ) {
            root = root.right, val
        }else {
            return root
        }
    }
    return null
}
var searchBST = function(root, val) {
    return getValue(root, val)
};