/**
 * @param {number[][]} points
 * @return {number}
 */

class PQ {
    constructor() {
        this.heap = [null]; // 1-based indexing
        this.N = 0;
    }

    isEmpty() {
        return this.N === 0;
    }

    insert(edge) {
        this.heap[++this.N] = edge;
        this.swim(this.N);
    }

    swim(index) {
        while (index > 1 && this.compareEdges(this.heap[Math.floor(index / 2)], this.heap[index]) > 0) {
            this.swap(Math.floor(index / 2), index);
            index = Math.floor(index / 2);
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    sink(index) {
        while (index * 2 <= this.N) {
            let child = index * 2;
            if (child < this.N && this.compareEdges(this.heap[child], this.heap[child + 1]) > 0) child++;
            if (this.compareEdges(this.heap[index], this.heap[child]) <= 0) break;
            this.swap(index, child);
            index = child;
        }
    }

    delMin() {
        const minEdge = this.heap[1];
        this.swap(1, this.N--);
        this.sink(1);
        this.heap[this.N + 1] = null;
        return minEdge;
    }

    // Compare edges based on cost (edge[0])
    compareEdges(edge1, edge2) {
        return edge1[0] - edge2[0];
    }
}

var minCostConnectPoints = function(points) {
    let n = points.length
    let distTo = Array(n).fill(Infinity)
    let pq = new PQ()
    let visited = {}
    let totalMinCost = 0;
    let pointsInMST = 0;

    distTo[0] = 0
    pq.insert([0, 0])

    while(!pq.isEmpty() && pointsInMST < n) {
        let [cost , u ] = pq.delMin()

        if(visited[u]) continue

        visited[u] = true 

        totalMinCost += cost;
        pointsInMST++;

        if(pointsInMST === n) break 

        for (let v = 0; v < n; v++) {
            if (u !== v && !visited[v]) {
                // Calculate Manhattan distance between u and v
                const manhattanDistance = Math.abs(points[u][0] - points[v][0]) +
                                          Math.abs(points[u][1] - points[v][1]);

                if (manhattanDistance < distTo[v]) {
                    distTo[v] = manhattanDistance; 
                    pq.insert([manhattanDistance, v]); 
                }
            }
        }

    }
    return totalMinCost
    
};