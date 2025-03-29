/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */


class BST {
    constructor() {
        this.root = null 
    }
    insertIntoBST(val) {
        this.root = this._insertIntoBST(this.root, val)
        return this.root 
    }
    _insertIntoBST(node, val) {
        if (node == null) {
            return new TreeNode(val)
        }
        let com = this.compare(val, node.val)

        if (com < 0) {
            node.left = this._insertIntoBST(node.left, val)
        } else if (com > 0) {
            node.right = this._insertIntoBST(node.right, val)
        } else {
            node.val = val
        }
        return node

    }
    compare(x, y) {
        if (x > y) return 1
        else if (x < y) return -1
        else return 0

    }
}


var bstFromPreorder = function(preorder) {
    let bst = new BST()
    for(let i = 0 ; i < preorder.length ; i++) {
        bst.insertIntoBST(preorder[i])
    }
    return bst.root
};