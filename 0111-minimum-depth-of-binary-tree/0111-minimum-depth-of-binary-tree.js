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
 * @return {number}
 */

// DFS 
var minDepth2 = function(root) {
    if(!root) {
        return 0 
    }
    return traverse(root) 
};

function traverse(root) {
    // return Infinity becasue there may be node with one leaf and the other  is   null if we return 0 it will not be irrelevent , we're effectively "ignoring" that path in the Math.min() comparison. This ensures only valid paths to leaf nodes are considered
    if(!root) {
        return Infinity
    }
    if(root && root.left === null && root.right === null) {
        return 1 
    }
    // add one to count the current node 
    return Math.min(traverse(root.left),traverse(root.right)) + 1
}


// BFS 
var minDepth = function(root) {
    if(!root) {
        return 0 
    }
    let queue = [[root, 1]]
    while(queue.length > 0) {
        let [node  , depth ] = queue.shift()

        if(!node.left && !node.right) {
            return depth
        }
        if(node.left) {
            queue.push([node.left, depth +1])
        }
         if(node.right) {
            queue.push([node.right, depth +1])
        }
    }
};
