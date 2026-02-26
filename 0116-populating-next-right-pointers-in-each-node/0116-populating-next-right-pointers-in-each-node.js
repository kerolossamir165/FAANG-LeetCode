/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
 // space o(N) because the queue

// var connect = function(root) {
//     if(!root) return root 
//     let queue = [root]
//     while(queue.length > 0) {
//         let levelSize = queue.length 
//         for(let i = 0 ; i < levelSize ; i++) {
//             let node = queue.shift() 

//             if(i + 1 < levelSize) {
//                 node.next = queue[0]
//             }
//             if(node.left) queue.push(node.left)
//             if(node.right) queue.push(node.right)

//         }
//     }
//     return root
    
// };

var connect = function(root) {
    if(!root) return root
    let leftMost = root 
    while(leftMost.left) {
        let head = leftMost 
        while(head) {
            head.left.next = head.right

            if(head.next) {
                head.right.next = head.next.left
            }

            head = head.next 
        }
        leftMost = leftMost.left
    }
    return root 
    
};