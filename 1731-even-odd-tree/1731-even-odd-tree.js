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
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
 if (!root) return null
    let queue = [root]
    let level = 0

    while (queue.length > 0) {
        let levelSize = queue.length 
        let values = []
        for(let i = 0 ; i <levelSize ;i++) {

            let node = queue.shift()
    
            values.push(node.val)
               
            if (node.left) {
                queue.push(node.left)
            }
    
            if (node.right) {
                queue.push(node.right)
            }
        }
        
        if(level % 2 === 0) {
            for(let i = 0 ; i < values.length;i++) {
                if(values[i] % 2 === 0 || (i > 0 && values[i] <= values[i-1])){
                    return false
                }
            }
        }else {
            for (let i = 0; i < values.length; i++) {
                if (values[i] % 2 !== 0 || (i > 0 && values[i] >= values[i - 1])) {
                    return false
                }
            } 
        }
        level++
    }
    return true
};