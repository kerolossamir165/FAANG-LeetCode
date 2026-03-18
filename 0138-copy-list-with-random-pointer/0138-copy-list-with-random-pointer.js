/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
    if (!head) return null;

    const map = new Map();  // original node → copy node

    // Pass 1: Create all copy nodes
    let curr = head;
    while (curr) {
        map.set(curr, new Node(curr.val));
        curr = curr.next;
    }

    // Pass 2: Wire up next and random pointers
    curr = head;
    while (curr) {
        const copy = map.get(curr);
        copy.next = map.get(curr.next) || null;
        copy.random = map.get(curr.random) || null;
        curr = curr.next;
    }

    return map.get(head);
};