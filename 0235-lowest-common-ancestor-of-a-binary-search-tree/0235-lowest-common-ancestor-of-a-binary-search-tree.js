/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
     let node = root;

    while (node) {
        if (p.val < node.val && q.val < node.val) {
            node = node.left;       // Both in left subtree
        } else if (p.val > node.val && q.val > node.val) {
            node = node.right;      // Both in right subtree
        } else {
            return node;            // Split point = LCA
        }
    }

    return null;
};