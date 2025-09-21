/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
class PQ {
    constructor() {
        this.pq = [null]; // 1-based indexing
        this.N = 0;
    }

    isEmpty() {
        return this.N === 0;
    }

    insert(x) {
        this.pq[++this.N] = x;
        this.swim(this.N);
    }

    swim(k) {
        // Swim up while parent is greater than child
        while (k > 1 && this.pq[Math.floor(k / 2)].val > this.pq[k].val) {
            this.swap(k, Math.floor(k / 2));
            k = Math.floor(k / 2);
        }
    }

    delMin() {
        if (this.N === 0) {
            return "You can't remove from an empty queue";
        }
        const min = this.pq[1];
        this.swap(1, this.N);
        this.N--;
        this.sink(1);
        this.pq[this.N + 1] = null;
        return min;
    }

    sink(k) {
        while (2 * k <= this.N) {
            let j = 2 * k;
            // Choose the smaller child
            if (j < this.N && this.pq[j].val > this.pq[j + 1].val) j++;
            if (!(this.pq[k].val > this.pq[j].val)) break;
            this.swap(k, j);
            k = j;
        }
    }

    swap(i, j) {
        const temp = this.pq[i];
        this.pq[i] = this.pq[j];
        this.pq[j] = temp;
    }
}


var mergeKLists = function (lists) {
    let heap = new PQ()
    for (const node of lists) {
        if (node) heap.insert(node)
    }
    let dummy = new ListNode(0)
    let current = dummy

    while(!heap.isEmpty()) {
        let min = heap.delMin()
        current.next = min;
        current = current.next;
        if(min.next) {
            heap.insert(min.next)
        }
    }
    return dummy.next
};