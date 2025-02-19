/**
 * @param {string[]} grid
 * @return {number}
 */
class Uf {
    _sizes = [];
    _ids = [];
    _numberOfComponents = 0;

    constructor(N) {
        for (let i = 0; i < N; i++) {
            this._ids[i] = i;
            this._sizes[i] = 0;
        }
        this._numberOfComponents = N;
    }

    union(p, q) {
        const pRoot = this.find(p);
        const qRoot = this.find(q);
        if (pRoot === qRoot) {
            return;
        }
        // weighing Approach
        if (this._sizes[pRoot] > this._sizes[qRoot]) {
            this._ids[qRoot] = pRoot;
            this._sizes[pRoot] += this._sizes[qRoot];
        } else {
            this._ids[pRoot] = qRoot;
            this._sizes[qRoot] += this._sizes[pRoot];
        }
        this._numberOfComponents--;
    }

    find(p) {
        let root = p
        while (root !== this._ids[root]) {
            root = this._ids[root];
        }
        // Compress the path
        while (p !== root) {
            let next = this._ids[p];
            this._ids[p] = root;
            p = this._ids[next];
        }
        return root;
    }

    count() {
        return this._numberOfComponents;
    }
}

var regionsBySlashes = function(grid) {
    let n = grid.length 
    let SIDES = 4 
    let allCells = SIDES  * n * n
    let uf = new Uf(allCells)

    function getIndex(row , cell) {
        if(row >= 0 && row < n && cell >=0 && cell < n ) {
            return SIDES * (row * n + cell)
        }
        return -1
    }
    function validCell(cell) {
        return cell >= 0 && cell < allCells
    }

    for(let row = 0 ; row < n ; row++) {
        for(let cell = 0 ; cell < n ; cell++ ) {

            let index = getIndex(row , cell)
            let dividerCell = grid[row][cell]

            if(dividerCell === " ") {
                uf.union(index + 0, index + 1)
                uf.union(index + 1 , index + 2)
                uf.union(index + 2 , index + 3)
            }

            if(dividerCell === "/") {
                uf.union(index + 0 , index + 3)
                uf.union(index + 1 , index + 2)
            }
            if(dividerCell === "\\") {
                uf.union(index + 0 , index + 1)
                uf.union(index + 3 , index + 2)
            }
            // get the bottom cells and merge it with to top cell of the next row
            if (validCell(getIndex(row + 1, cell))) {
                uf.union(index + 2 ,getIndex(row + 1, cell));    
            }
            // get the left cells and merge it with to right cell of the next col
            if (validCell(getIndex(row, cell + 1))) {
                uf.union(index + 1,  getIndex(row, cell + 1) + 3);    
            }


        }
    }
    return uf.count()

};