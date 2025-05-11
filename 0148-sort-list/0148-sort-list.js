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
var sortList = function(head) {
    if(!head || !head.next) {
        return head 
    }

    let secondHead = splitList(head)

    let firstSorted = sortList(head)
    let secondSorted = sortList(secondHead)

    return merge(firstSorted,secondSorted )
};

function splitList(head) {
    let slow = head 
    let fast = head 
    
    while(fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let newHead = slow.next 
    slow.next = null 

    return newHead
}

function merge(head1, head2) {
    let dummy = new ListNode(-1)
    let tail = dummy
    while(head1 && head2) {
        if(head1.val < head2.val) {
            tail.next = head1
            head1 = head1.next
        } else {
            tail.next = head2
            head2 = head2.next
        }
        tail = tail.next
    }

    tail.next = head1 || head2
    return dummy.next
}