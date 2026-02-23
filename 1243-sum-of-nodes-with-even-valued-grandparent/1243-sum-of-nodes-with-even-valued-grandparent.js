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
var sumEvenGrandparent = function(root) {
    if(!root) return 0 
    let sum = 0 
    let queue = [root] 

    while(queue.length > 0) {
        let node = queue.shift() 

        if(node.val % 2 === 0) {

            if(node.left) {
                if(node.left.left)  {
                    sum += node.left.left.val 
                }
                if(node.left.right)  {
                    sum += node.left.right.val 
                }
            }
             if(node.right) {
                if(node.right.right)  {
                    sum += node.right.right.val 
                    
                }
                 if(node.right.left)  {
                    sum += node.right.left.val 
                    
                }
            }


        }
        if(node.left) {
            queue.push(node.left)
        }

        if(node.right) {
            queue.push(node.right)
        }
    }
    return sum
};