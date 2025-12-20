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
 * @return {number[]}
 */
var rightSideView = function(root) {
     if(!root) return []

    let queue = []
    let res = []

    queue.push(root) 


    while(queue.length) {
        //At the start of each while iteration, last tells you how many nodes belong to the current level.
        let last = queue.length 

        //ensures you process exactly those nodes before moving to the next level.
        for(let i = 0 ; i < last ; i++) {   
            let node = queue.shift() 
            if(node.left) {
               queue.push(node.left)
            }

            if(node.right) {
                queue.push(node.right)
            }
            
            if(i === last-1) {
                res.push(node.val)
            }
        }
    }
    return res
};