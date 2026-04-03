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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (!root) return;

    let stack = [root];

    while (stack.length > 0) {
        let current = stack.pop();

        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);

        if (stack.length > 0) {
            current.right = stack[stack.length - 1];
        }
        current.left = null;
    }

};

// recursive 
/**
function flatten(root) {
    if (!root) return;

    // Flatten left and right subtrees
    flatten(root.left);
    flatten(root.right);

    // Store the right subtree
    let tempRight = root.right;

    // Move left subtree to the right
    root.right = root.left;
    root.left = null;

    // Find the tail of the new right subtree
    let current = root;
    while (current.right) {
        current = current.right;
    }

    // Attach the original right subtree
    current.right = tempRight;
}

 */