/**
 * @param {string[]} equations
 * @return {boolean}
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
        let root = p;
        while (root !== this._ids[root]) {
            root = this._ids[root];
        }
        // Path compression
        while (p !== root) {
            let next = this._ids[p];
            this._ids[p] = root;
            p = next;
        }
        return root;
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
var equationsPossible = function (equations) {
    let uf = new UnionFind(26)

    for (let eq of equations) {
        if (eq[1] === "=") {
            let i = eq.charCodeAt(0) - "a".charCodeAt(0)
            let j = eq.charCodeAt(3) - "a".charCodeAt(0)
            uf.union(i, j)

        }
    }

    for (let eq of equations) {
        if (eq[1] == "!") {
            let i = eq.charCodeAt(0) - "a".charCodeAt(0)
            let j = eq.charCodeAt(3) - "a".charCodeAt(0)
            // i , j in the same group and not equal this violate the equality
            if (uf.connected(i, j)) {
                return false
            }

        }
    }
    return true

};