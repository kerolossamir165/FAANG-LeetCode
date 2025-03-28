/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

class UF {
    constructor(n) {
        this._ids = []
        this._ranks = []

        for(let i = 0; i < n ; i++) {
            this._ids[i] = i
            this._ranks[i] = 0
        }
    }

    find(x) {
        while (x !== this._ids[x]) {
            this._ids[x] = this._ids[this._ids[x]]
            x = this._ids[x]
        }
        return x
    }

    connected(x, y) {
        return this.find(x) === this.find(y)
    }

    union(p , q) {
        let pRoot = this.find(p)
        let qRoot = this.find(q)

        if(pRoot === qRoot) return 

        if(this._ranks[pRoot] < this._ranks[qRoot]) {
            this._ids[pRoot] = qRoot
            this._ranks[qRoot] += this._ranks[pRoot]
        }else {
            this._ids[qRoot] = pRoot
            this._ranks[pRoot] += this._ranks[qRoot] 
        }
    }
}


var validPath = function(n, edges, source, destination) {

    let uf = new UF(n)

    for(let i = 0 ; i < edges.length ;i++) {
        let [x, y] = edges[i]
        uf.union(x, y)
    }

    if(uf.connected(source,destination )){
        return true
    }
    return false 
}; 