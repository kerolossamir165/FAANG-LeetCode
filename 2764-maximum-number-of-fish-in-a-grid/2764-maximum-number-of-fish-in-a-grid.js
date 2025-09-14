/**
 * @param {number[][]} grid
 * @return {number}
 */
class UnionFind {
    constructor(N) {
        this._ids = [];
        this._rank = [];

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
    }

}


var findMaxFish = function (grid) {
    let row = grid.length
    let col = grid[0].length
    let n = grid.length
    let size = row * col
    let fishies = Array(size).fill(0)

    let uf = new UnionFind(size)
    
     let getIndex = (r, c) => {
        if (r >= 0 && r < row && c >= 0 && c < col) {
            return r * col + c;
        }
        return -1;
    };

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let val = grid[i][j]
            let index = getIndex(i , j)
            fishies[index] = val
            if(val !== 0) {
                const tryUnion = (ni, nj) => {
                    if (ni >= 0 && ni < row && nj >= 0 && nj < col && grid[ni][nj] !== 0) {
                        uf.union(index, getIndex(ni, nj));
                    }
                };
                tryUnion(i - 1, j);
                tryUnion(i + 1, j);
                tryUnion(i, j - 1);
                tryUnion(i, j + 1);

            }
        }
    }    

    let rootFish = new Array(size).fill(0);
    for (let i = 0; i < size; i++) {
        let root = uf.find(i);
        rootFish[root] += fishies[i];
    }
    
    return Math.max(...rootFish);    

};