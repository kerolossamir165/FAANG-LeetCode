/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (!head || left === right) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    // Move `prev` to the node before `left`
    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    // Reverse the sublist from left to right
    let curr = prev.next;
    let next = null;
    let prevSub = null;

    for (let i = left; i <= right; i++) {
        next = curr.next;
        curr.next = prevSub;
        prevSub = curr;
        curr = next;
    }

    // Connect the reversed sublist back
      // tail of reversed part connects to remainder
      prev.next.next = curr;  
       // prev connects to new head of reversed part
      prev.next = prevSub;    

    return dummy.next;
};