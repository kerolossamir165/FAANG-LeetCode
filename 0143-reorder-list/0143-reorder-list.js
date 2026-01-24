/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (!head || !head.next) return;

    let fast = head
    let slow = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let secondHalf = slow.next
    slow.next = null
    let reversed = null

    while (secondHalf) {
        let temp = secondHalf.next
        secondHalf.next = reversed
        reversed = secondHalf
        secondHalf = temp
    }

    let firstHalf = head
    while (reversed) {
        let tempHead = firstHalf.next
        let tempReversed = reversed.next

        firstHalf.next = reversed
        reversed.next = tempHead
        firstHalf = tempHead
        reversed = tempReversed
    }
};