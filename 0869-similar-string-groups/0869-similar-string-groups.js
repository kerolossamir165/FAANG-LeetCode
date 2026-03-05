/**
 * @param {string[]} strs
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

function isSimilar(s1 , s2) {
    let diffe = 0 
    for(let i = 0 ; i < s1.length ; i++) {
        if(s1.charAt(i) !== s2.charAt(i)) {
            diffe++
        }
        if(diffe > 2) {
            return false 
        }
    }
    return diffe === 2 || diffe === 0
}



var numSimilarGroups = function(strs) {
    let n = strs.length 
    let uf = new UnionFind(n)

    for(let i = 0 ; i < n ; i++) {
        for(let j = i +1 ; j < n ; j++) {
            if(isSimilar(strs[i] , strs[j])) {
                uf.union(i , j)
            }
        }
    }
   
    return uf.count()
};