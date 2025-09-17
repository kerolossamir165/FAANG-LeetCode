/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

class UnionFind {
    constructor(N) {
        this._ids = [];
        this._rank = [];
        this.numComponent = N
        for (let i = 0; i < N; i++) {
            this._ids[i] = i;
            this._rank[i] = 0;

        }
    }

    connected(p, q) {
        return this.find(p) === this.find(q);
    }

    find(x) {
        while (x !== this._ids[x]) {
            this._ids[x] = this._ids[this._ids[x]]; // Path compression
            x = this._ids[x];
        }
        return x;
    }

    union(p, q) {
        let rootP = this.find(p);
        let rootQ = this.find(q);

        if (rootP === rootQ) return;
        if (this._rank[rootP] < this._rank[rootQ]) {
            this._ids[rootP] = rootQ;
            this._rank[rootQ] += this._rank[rootP];
        } else {
            this._ids[rootQ] = rootP;
            this._rank[rootP] += this._rank[rootQ];
        }
        this.numComponent--
    }
    getNumComponent() {
        return this.numComponent
    }

}
var countCompleteComponents = function (n, edges) {
    let uf = new UnionFind(n)
    let nodeCount = {};
    let edgeCount = {};
    let countComplete = 0

    for (const [u, v] of edges) {
        uf.union(u, v)
    }

    for (let i = 0; i < n; i++) {
        const root = uf.find(i);
        nodeCount[root] = (nodeCount[root] || 0) + 1;
    }

    for (const [u, v] of edges) {
        const root = uf.find(u);
        edgeCount[root] = (edgeCount[root] || 0) + 1;
    }

      for(let i in nodeCount){
        let node = nodeCount[i]
        let edge = edgeCount[i] || 0
        const expectedEdges = (node * (node - 1)) / 2;
        if(edge === expectedEdges){
            countComplete++
        }        
        
    }
    return countComplete
    
    
};


