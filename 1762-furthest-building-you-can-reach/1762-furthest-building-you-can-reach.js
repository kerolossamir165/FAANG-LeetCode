/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
class PQ {
    constructor() {
        this.heap = []
        this.N = 0
    }

    insert(x) {
        this.heap[++this.N] = x
        this.swim(this.N)
    }
    swim(x) {
        while(x > 1 && this.heap[Math.floor(x/2)] > this.heap[x]) {
            this.swap(Math.floor(x / 2), x)
            x = Math.floor(x / 2)
        }
    }
    swap(i , j) {
        let temp = this.heap[i]
        this.heap[i] = this.heap[j]
        this.heap[j] = temp 
    }
    sink(k) {
        while(2*k <= this.N) {

            let j = 2*k
            if(j < this.N && this.heap[j] > this.heap[j+1])j++
            if(!(this.heap[k] > this.heap[j])) break
            this.swap(k , j) 
            k = j
        }
    }

    deleteMin() {
        let min = this.heap[1] 
        this.swap(1, this.N)
        this.N--
        this.sink(1)
        return min
    }
    size() {
        return this.N
    }
}

var furthestBuilding = function (heights, bricks, ladders) {
    let pq = new PQ() 

    for (let i = 0; i < heights.length - 1 ;i++) {

        if (heights[i] >= heights[i + 1]) continue;

        let diff = heights[i + 1] - heights[i]
        if (diff > 0) pq.insert(diff)

        if(pq.size() > ladders) {
            bricks -= pq.deleteMin()
        }

        if(bricks < 0) {
            return i
        }
    }
    return heights.length - 1 
};