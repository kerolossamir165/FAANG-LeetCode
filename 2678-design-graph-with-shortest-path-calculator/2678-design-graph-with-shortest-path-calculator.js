class MinHp {
    constructor() { this.data = []; }
    size() { return this.data.length; }
    push(item) {
        this.data.push(item);
        this._bubbleUp(this.data.length - 1);
    }
    pop() {
        const min = this.data[0];
        const last = this.data.pop();
        if (this.data.length > 0) { this.data[0] = last; this._sinkDown(0); }
        return min;
    }
    _bubbleUp(i) {
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (this.data[p][0] <= this.data[i][0]) break;
            [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
            i = p;
        }
    }
    _sinkDown(i) {
        const n = this.data.length;
        while (true) {
            let s = i, l = 2 * i + 1, r = 2 * i + 2;
            if (l < n && this.data[l][0] < this.data[s][0]) s = l;
            if (r < n && this.data[r][0] < this.data[s][0]) s = r;
            if (s === i) break;
            [this.data[s], this.data[i]] = [this.data[i], this.data[s]];
            i = s;
        }
    }
}


/**
 * @param {number} n
 * @param {number[][]} edges
 */
var Graph = function (n, edges) {
    this.n = n;
    this.adj = new Array(n).fill(null).map(() => []);  // Adjacency list
    for (const [from, to, cost] of edges) {
        this.adj[from].push([to, cost]);
    }

};

/** 
 * @param {number[]} edge
 * @return {void}
 */
Graph.prototype.addEdge = function (edge) {
    const [from, to, cost] = edge;
    this.adj[from].push([to, cost]);
};

/** 
 * @param {number} node1 
 * @param {number} node2
 * @return {number}
 */
Graph.prototype.shortestPath = function (node1, node2) {
    const dist = new Array(this.n).fill(Infinity);
    dist[node1] = 0;
    const heap = new MinHp();
    heap.push([0, node1]);

    while (heap.size() > 0) {
        const [d, u] = heap.pop();
        if (u === node2) return d;          
        if (d > dist[u]) continue;        

        for (const [v, w] of this.adj[u]) {
            const newDist = d + w;
            if (newDist < dist[v]) {
                dist[v] = newDist;
                heap.push([newDist, v]);
            }
        }
    }
    return -1
};

/** 
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */