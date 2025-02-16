/**
 * @param {number[][]} edges
 * @return {number[]}
 */
class UnionFind {
    constructor(n) {
        this.n = n
        this._ids = []
        this._ranks = []
        for (let i = 0; i < this.n; i++) {
            this._ids[i] = i
            this._ranks[i] = 1
        }
        this._numberOfComponents = n
    }
    connected(p, q) {
        return this.find(p) === this.find(q)
    }

    find(p) {
        let root = this._ids[p]
        while (root !== this._ids[root]) {
            root = this._ids[root]
        }

        while (p !== root) {
            let next = this._ids[p]
            this._ids[p] = root
            p = this._ids[next]
        }
        return root
    }
    union(p, q) {
        const pRoot = this.find(p);
        const qRoot = this.find(q);
        if (pRoot === qRoot) return;

        // Weighting Approach
        if (this._ranks[pRoot] > this._ranks[qRoot]) {
            this._ids[qRoot] = pRoot;
            this._ranks[pRoot] += this._ranks[qRoot];
        } else {
            this._ids[pRoot] = qRoot;
            this._ranks[qRoot] += this._ranks[pRoot];
        }
        this._numberOfComponents--;
    }
    count() {
        return this._numberOfComponents
    }
}
var findRedundantConnection = function(edges) {
    let uf = new UnionFind(edges.length)

    for (let i = 0; i < edges.length; i++) {
       
        if(!uf.connected(edges[i][0] , edges[i][1])) {
            uf.union(edges[i][0], edges[i][1])
        }else {
            return [edges[i][0], edges[i][1]]
        }  
    }
    
};