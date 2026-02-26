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
var deepestLeavesSum = function(root) {
    if(!root) return 0 

    let queue =[root] ,levelSum = 0

    while(queue.length) {
       let level = queue.length 
       levelSum = 0 

       for(let i = 0 ; i < level ; i++) {
            let node = queue.shift()
            levelSum += node.val
            if(node.left) {
                queue.push(node.left)
            }
            if(node.right) {
                queue.push(node.right)
            }
       } 
    }
    return levelSum
};

// dfs 
// var deepestLeavesSum = function(root) {
//     let maxDepth = 0;
//     let sum = 0;

//     function dfs(node, depth) {
//         if (!node) return;

//         // If it's a leaf
//         if (!node.left && !node.right) {
//             if (depth > maxDepth) {
//                 maxDepth = depth;
//                 sum = node.val; // reset sum for new deepest level
//             } else if (depth === maxDepth) {
//                 sum += node.val; // add to sum if same deepest level
//             }
//         }

//         dfs(node.left, depth + 1);
//         dfs(node.right, depth + 1);
//     }

//     dfs(root, 0);
//     return sum;
// };
