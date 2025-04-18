/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    // it asks for the minimum time it takes for all n nodes to receive a signal, we are essentially calculating the maximum time it takes for any single node to receive the signal starting from the source node k.
 const graph = Array.from({ length: n + 1 }, () => []);
    for (let [from, to, time] of times) {
        graph[from].push([to, time]);
    }
    let queue = new PQ()
    const distTo = Array(n + 1).fill(Infinity);
    distTo[k] = 0;
    
    queue.insert(k , 0)
    

    while (!queue.isEmpty()) {
        let {vertex , dist} = queue.delMin()
        
        if (graph[vertex]) {
            for (let [to, time] of graph[vertex]) {
                
                let newTime = time + dist
                if (distTo[to] > newTime) {
                    distTo[to] = newTime
                    queue.insert(to , newTime)
                }
            }
        }
        
    }
    //we calculate the shortest time for each node to receive the signal and    then check the maximum of those times. This maximum time represents the time it takes for all nodes to receive the signal.
    let max = Math.max(...distTo.slice(1))  
    return  max === Infinity  ? -1 : max
};
class PQ {
    constructor() {
        this.heap = [null]; // Start with a dummy element for 1-based indexing
        this.N = 0;
    }

    isEmpty() {
        return this.N === 0;
    }

    insert(vertex, dist) {
        this.heap[++this.N] = { vertex, dist }; // Store vertex-distance pairs
        this.swim(this.N); // Restore the min-heap property
    }

    swim(index) {
        while (index > 1 && this.compare(this.heap[Math.floor(index / 2)], this.heap[index]) > 0) {
            this.swap(Math.floor(index / 2), index);
            index = Math.floor(index / 2);
        }
    }

    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    sink(index) {
        while (index * 2 <= this.N) {
            let child = index * 2;
            if (child < this.N && this.compare(this.heap[child], this.heap[child + 1]) > 0) child++;
            if (this.compare(this.heap[index], this.heap[child]) <= 0) break;
            this.swap(index, child);
            index = child;
        }
    }

    delMin() {
        let minNode = this.heap[1]; // The smallest node
        this.swap(1, this.N--);
        this.sink(1); // Restore the min-heap property
        this.heap[this.N + 1] = null; // Remove the last node
        return minNode;
    }

    compare(node1, node2) {
        return node1.dist - node2.dist; 
    }
}