/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function(head) {
    if(!head ) return null
    let current = head 


    while(current) {
        if(current.child) {
            let next = current.next 

            current.next = current.child 
            current.child.prev = current 
            current.child = null 

            let tail = current.next

            while(tail.next) {
                tail = tail.next 
            }

            if(next) {
                tail.next = next 
                next.prev = tail 
            }

        }   
        current = current.next
    }
    return head     
};