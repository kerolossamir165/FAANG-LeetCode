/**
 * @param {number[][]} isConnected
 * @return {number}
 */

class UnionFind {
    constructor(n) {
        this.n = n
        this._ids = []
        this._ranks = []
        for(let i = 0 ; i < this.n ; i++) {
            this._ids[i] = i
            this._ranks[i] = 1
        }
        this._numberOfComponents = n
    }
    connected(p , q) {
        return this.find(p) === this.find(q)
    }

    find(p) {
        let root = this._ids[p]
        while(root !== this._ids[root]) {
            root = this._ids[root]
        }

        while(p !== root) {
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
var findCircleNum = function(isConnected) {
    let uf = new UnionFind(isConnected.length)

    for(let i = 0 ; i < isConnected.length ; i++ ) {
        for(let j = 0 ; j < isConnected[i].length ; j++) {
             if (isConnected[i][j] === 1) {
                uf.union(i, j)
            }
        }
    }
    return uf.count()
};