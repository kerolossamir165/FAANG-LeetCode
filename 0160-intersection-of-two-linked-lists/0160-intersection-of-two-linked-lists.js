/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let placeHolderA = headA
    let placeHolderB = headB
    
    while(placeHolderA !== placeHolderB){
        placeHolderA = placeHolderA ? placeHolderA.next : headB
        placeHolderB = placeHolderB ? placeHolderB.next : headA
    }

    return placeHolderA
    
};