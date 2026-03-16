/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @param {number[][]} requests
 * @return {boolean[]}
 */

class UnionFind {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = Array(n).fill(1);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // path compression
        }
        return this.parent[x];
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if (rootX === rootY) return false;

        if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX] += 1;
        }
        return true;
    }
}
var friendRequests = function(n, restrictions, requests) {
     const uf = new UnionFind(n);
    const result = [];

    for (let [u, v] of requests) {
        let rootU = uf.find(u);
        let rootV = uf.find(v);

        if (rootU === rootV) {
            result.push(true); // already friends
            continue;
        }

        // Check restrictions
        let valid = true;
        for (let [x, y] of restrictions) {
            let rootX = uf.find(x);
            let rootY = uf.find(y);

            // If merging u and v causes restricted pair to be in same group
            if ((rootX === rootU && rootY === rootV) || 
                (rootX === rootV && rootY === rootU)) {
                valid = false;
                break;
            }
        }

        if (valid) {
            uf.union(u, v);
            result.push(true);
        } else {
            result.push(false);
        }
    }

    return result;
};