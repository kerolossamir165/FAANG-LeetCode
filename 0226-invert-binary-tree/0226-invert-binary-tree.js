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
 * @return {TreeNode}
 */
var invertTree2 = function(root) {
    if(!root) {
        return null 
    }
    [root.left, root.right] = [root.right, root.left];
    invertTree(root.left)
    invertTree(root.right)
    return root
    
};

var invertTree = function(root) {
    if(!root) {
        return null 
    }
    let stack = [root]

    while(stack.length > 0) {
        let node = stack.pop() 
          if (node) {
            [node.left, node.right] = [node.right, node.left];

            if (node.left) stack.push(node.left);
            if (node.right) stack.push(node.right);
        }
    }
    return root
};