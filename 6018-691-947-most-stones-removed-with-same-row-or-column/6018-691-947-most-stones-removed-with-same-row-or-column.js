/**
 * @param {number[][]} stones
 * @return {number}
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
        this._remainsComponent = 0
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
        this._remainsComponent++

    }
    count() {
        return this._numberOfComponents
    }
    remainsCount() {
        return this._remainsComponent

    }
}
var removeStones = function(stones) {
    let uf = new UnionFind(stones.length)

    for(let i = 0 ; i < stones.length ; i++ ) {
        for(let j = i + 1 ; j < stones.length ; j++ ) {
            if(stones[i][0] === stones[j][0] || stones[i][1] === stones[j][1]) {
                uf.union(i , j)
            }
        }
    }
    return uf.remainsCount()
    
};