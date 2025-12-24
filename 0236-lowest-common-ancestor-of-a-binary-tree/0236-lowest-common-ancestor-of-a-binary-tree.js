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
let lca = null
var lowestCommonAncestor = function(root, p, q) {
    dfs(root , p , q ) 

    return lca 
    
};

function dfs(root , p , q) {
    if(!root) return false

    let isTheNode = (root === p) || (root === q)

    let leftContains = dfs(root.left, p , q)
    let rightContains = dfs(root.right, p , q)

    if((isTheNode ? 1 : 0) + (leftContains ? 1 : 0) + (rightContains ? 1 : 0) >= 2) {
        lca = root
    }

    return isTheNode || leftContains || rightContains
}