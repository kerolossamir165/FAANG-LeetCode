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
var widthOfBinaryTree = function(root) {
    if (!root) return 0;
    let max = 0 
    let queue = [[root, 0]]
    while(queue.length) {

        let level = queue.length 

        let left = queue[0][1]
        let right = left 

        for(let i = 0 ; i < level ; i++) {
            let [node , index ] = queue.shift()
            index -= left;
            if(node.left) {
                queue.push([node.left , 2*index + 1] )
            }

            if(node.right) {
                queue.push([node.right, 2*index + 2])
            }
            right = index
        }
        // right - left + 1 
        // the plus 1  to include the leftmost node itself in the count.
        // the subtraction calculate the steps 
        // but + 1 include the nodes
        max = Math.max(max , right + 1)
    }

    return max
    
};