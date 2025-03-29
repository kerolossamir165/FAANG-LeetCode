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
var insertIntoBST = function(root, val) {
    root = _insertIntoBST(root, val)
    return root
};
function _insertIntoBST(node , val) {
    if(node == null) {
        return new TreeNode(val)
    }

    let com = compare(val , node.val)

    if(com < 0 ) {
        node.left = _insertIntoBST(node.left , val)
    }else if (com > 0) {
        node.right = _insertIntoBST(node.right, val)
    } else {
        node.val = val
    }
    return node

}

function compare(x,y) {
    if (x > y) return 1
    else if (x < y) return -1
    else return 0
    
}