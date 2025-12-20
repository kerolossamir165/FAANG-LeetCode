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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let preorder_index = 0, inorder_indexes_map = {}
    inorder.forEach((val , i) => inorder_indexes_map[val] = i)

    function buildSubTree(left , right) {
        if(left > right ||  preorder_index >= preorder.length ) return null 

        let val = preorder[preorder_index]
        let inorder_index = inorder_indexes_map[val]
        let node = new TreeNode(val)

        preorder_index +=1

        node.left = buildSubTree(left , inorder_index - 1)
        node.right = buildSubTree(inorder_index + 1 , right)
        return node
    }

    return buildSubTree(0 , inorder.length - 1)
};