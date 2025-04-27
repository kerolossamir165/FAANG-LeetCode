/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(-1 , head )
    let leader = dummy
    let tail = dummy 

    for(let i = 0 ; i < n; i++) {
        leader = leader.next 
        // the head itself is the node we need to remove
        if(!leader) { return head }
    }  
    while(leader.next) {
        leader = leader.next
        tail = tail.next
    }
    tail.next = tail.next.next 

    return dummy.next 
};