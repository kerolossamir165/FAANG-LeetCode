/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode() 
    let pointer = dummy 
    let curr = 0 

    while(l1 !== null || l2 !== null || curr !== 0 ) {
        let valL1 = l1 != null ? l1.val : 0
        let valL2 = l2 != null ? l2.val : 0

        let sum = valL1 + valL2 + curr
        let digit = sum % 10
        curr = Math.floor(sum / 10 )

        let node = new ListNode(digit) 
        pointer.next = node 
        pointer = pointer.next 

        l1 = l1 !== null ? l1.next : null  
        l2 = l2 !== null ? l2.next : null

    }
  
   return dummy.next 
};