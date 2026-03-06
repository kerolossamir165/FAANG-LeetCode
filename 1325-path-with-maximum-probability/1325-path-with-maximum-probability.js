/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
class Maxheap {
    constructor() {
        this.heap = [];
    }

    push(item) {
        this.heap.push(item);
        this._bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) return null;
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._sinkDown(0);
        }
        return max;
    }

    _bubbleUp(index) {
        const element = this.heap[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (element[0] <= parent[0]) break;
            this.heap[parentIndex] = element;
            this.heap[index] = parent;
            index = parentIndex;
        }
    }

    _sinkDown(index) {
        const length = this.heap.length;
        const element = this.heap[index];
        while (true) {
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            let swap = null;

            if (leftIndex < length) {
                if (this.heap[leftIndex][0] > element[0]) {
                    swap = leftIndex;
                }
            }
            if (rightIndex < length) {
                if (
                    (swap === null && this.heap[rightIndex][0] > element[0]) ||
                    (swap !== null && this.heap[rightIndex][0] > this.heap[leftIndex][0])
                ) {
                    swap = rightIndex;
                }
            }
            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}
var maxProbability = function (n, edges, succProb, start_node, end_node) {
    const graph = Array.from({ length: n }, () => []);
    for (let i = 0; i < edges.length; i++) {
        const [u, v] = edges[i];
        const p = succProb[i];
        graph[u].push([v, p]);
        graph[v].push([u, p]);
    }
    //probabilities to store the maximum probability of reaching each node from the start node. Initialize this array with zeros and set the start node's probability to 1.0
    const probabilities = Array(n).fill(0);
    probabilities[start_node] = 1.0;

    const heap = new Maxheap();
    heap.push([1.0, start_node]);

    while (!heap.isEmpty()) {
        const [currentProb, currentNode] = heap.pop();

        if (currentNode === end_node) return currentProb;

        for (const [neighbor, edgeProb] of graph[currentNode]) {
            const newProb = currentProb * edgeProb;
            if (newProb > probabilities[neighbor]) {
                probabilities[neighbor] = newProb;
                heap.push([newProb, neighbor]);
            }
        }
    }

    return 0.0;
};

