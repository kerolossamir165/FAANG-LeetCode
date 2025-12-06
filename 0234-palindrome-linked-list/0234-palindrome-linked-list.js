/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let mid = findMiddle(head)

    let reversed = reverseLinkedList(mid)

    let p1 = head 
    let p2 = reversed 
    let res = true 
    while (p2) {
        if(p1.val !== p2.val) {
            res = false
        }
        p1 = p1.next
        p2 = p2.next
    }
    return res
    
};

function reverseLinkedList(head) {
    let current = head 
    let prev = null 

    while(current) {
        let next = current.next 
        current.next = prev 
        prev = current 
        current = next 
    }
    return prev 
}

function findMiddle(head) {
    let fast = head 
    let slow = head 

    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
    }
    return slow
} 