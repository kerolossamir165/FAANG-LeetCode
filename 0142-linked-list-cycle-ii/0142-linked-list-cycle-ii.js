/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head) return null 
    let slow = head
    let fast = head

    while(fast && fast.next) {
        slow = slow.next 
        fast = fast.next.next
        if(slow === fast) {
        /**The distance between the head and the start of the cycle
            equals the distance from the meeting point to the start of the cycle.

            When one pointer starts from the head and the other 
            starts from the meeting point, 
            they will converge at the start of the cycle. */
            slow = head 
            while(slow !== fast) {
                slow = slow.next 
                fast = fast.next
            }
            return slow
        }
    }
    return null
    
};