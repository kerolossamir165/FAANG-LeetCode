/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */

// class MinPriorityQueue {
//     constructor() {
//         this.heap = [];
//     }

//     // Get parent/child indices
//     parent(i) { return Math.floor((i - 1) / 2); }
//     left(i) { return 2 * i + 1; }
//     right(i) { return 2 * i + 2; }

//     // Swap helper
//     swap(i, j) {
//         [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
//     }

//     // Insert element [priority, value]
//     enqueue(element) {
//         this.heap.push(element);
//         this.bubbleUp(this.heap.length - 1);
//     }

//     bubbleUp(i) {
//         while (i > 0 && this.heap[i][0] < this.heap[this.parent(i)][0]) {
//             this.swap(i, this.parent(i));
//             i = this.parent(i);
//         }
//     }

//     // Remove and return smallest element
//     dequeue() {
//         if (this.isEmpty()) return null;
//         if (this.heap.length === 1) return this.heap.pop();

//         const root = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.bubbleDown(0);
//         return root;
//     }

//     bubbleDown(i) {
//         let smallest = i;
//         const left = this.left(i);
//         const right = this.right(i);

//         if (left < this.heap.length && this.heap[left][0] < this.heap[smallest][0]) {
//             smallest = left;
//         }
//         if (right < this.heap.length && this.heap[right][0] < this.heap[smallest][0]) {
//             smallest = right;
//         }
//         if (smallest !== i) {
//             this.swap(i, smallest);
//             this.bubbleDown(smallest);
//         }
//     }

//     isEmpty() {
//         return this.heap.length === 0;
//     }
// }

var findTheCity = function(n, edges, distanceThreshold) {
 const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));
    for (let i = 0; i < n; i++) dist[i][i] = 0;

    // Fill in edge weights
    for (const [u, v, w] of edges) {
        dist[u][v] = Math.min(dist[u][v], w);
        dist[v][u] = Math.min(dist[v][u], w);
    }

    // Floyd–Warshall: update all-pairs shortest paths
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    // Find city with smallest number of neighbors within threshold
    let resultCity = -1;
    let minNeighbors = Infinity;

    for (let i = 0; i < n; i++) {
        let neighbors = 0;
        for (let j = 0; j < n; j++) {
            if (i !== j && dist[i][j] <= distanceThreshold) {
                neighbors++;
            }
        }
        if (neighbors <= minNeighbors) {
            minNeighbors = neighbors;
            resultCity = i; // prefer larger index in ties
        }
    }

    return resultCity;
};