/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let dummy = new ListNode(0,head)
    let prev  = dummy , current = head 

    while(current && current.next) {
        //node after the pair that is currently being processed
        let temp = current.next.next 
        //the second node of the current pair.
        let second = current.next 

        second.next = current 
        //  connects the swapped pair to the rest of the list.
        current.next = temp 
        prev.next = second 

        prev = current
        current = temp 
    }
    return dummy.next 
    
};