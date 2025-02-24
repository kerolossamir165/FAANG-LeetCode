/**
 * @param {character[][]} grid
 * @return {number}
 */

class UF {
    constructor(n) {
        this.n = n
        this._ids = []
        this._sizes = []
        for (let i = 0; i < this.n; i++) {
            this._ids[i] = i
            this._sizes[i] = 1
        }
        this.numComponent = n
    }
    find(x) {
        let root = x
        while (root !== this._ids[root]) {
            root = this._ids[root]
        }

        while (x !== root) {
            let next = this._ids[x]
            this._ids[x] = root
            x = this._ids[next]
        }
        return root
    }

    union(p, q) {
        let pRoot = this.find(p)
        let qRoot = this.find(q)
        if(pRoot === qRoot) return 
        if (this._sizes[pRoot] > this._sizes[qRoot]) {
            this._ids[qRoot] = pRoot
            this._sizes[pRoot] += this._sizes[qRoot]
        } else {
            this._ids[pRoot] = qRoot
            this._sizes[qRoot] += this._sizes[pRoot]
        }
        this.numComponent--
    }
    count () {
        return this.numComponent
    }

}
var numIslands = function (grid) {
    let colLength = grid[0].length
    let gridLength  = grid.length
    let allElements = colLength * gridLength
    let uf = new UF(allElements)
    let remainsCount = 0

    function getIndex(row , col ) {
        return row * colLength + col
    }

    function isValid(row , col ) {
        return row >= 0 && row < gridLength && col >= 0 && col < colLength
    }
    let direction = [
        [1, 0],
        [-1,0],
        [0, -1],
        [0, 1]
    ]

    for(let row = 0 ; row < gridLength; row++) {
        for (let col = 0; col < colLength; col++) {

            let element = grid[row][col]
            if(element ==="1") {
                let index = getIndex(row, col)
                for(let [dirRow , dirCol] of direction) {
                    let newRow = row + dirRow 
                    let newCol = col + dirCol 
                    
                    if(isValid(newRow, newCol) && grid[newRow][newCol] === "1") {
                        let newIndex= getIndex(newRow, newCol)
                        uf.union(index, newIndex)
                    }
                }
             }else {
                remainsCount++
             }

        }
    }

    return uf.count() - remainsCount

};