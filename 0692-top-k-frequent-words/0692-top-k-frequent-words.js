/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    let map = {}
    let pq = new PQ()

    for (let i of words) {
        if (!map[i]) {
            map[i] = 1
        }
        map[i] += 1
    }

    for(let [word , frq] of Object.entries(map)) {
        pq.insert({
            word, frq
        })  
    }       
    
    let result = [];
    for (let i = 0; i < k; i++) {
        if (!pq.isEmpty()) {
            
            result.push(pq.delMax().word); 
        }
    }

    return result
    

};
class PQ {
    constructor() {
        this.pq = [null]
        this.N = 0
    }
    isEmpty() {
        return this.N === 0
    }

    insert(x) {
        this.pq[++this.N] = x
        this.swim(this.N)
    }
    swim(k) {
        while (k > 1 && this.compare(this.pq[Math.floor(k / 2)] , this.pq[k]) < 0) {
            this.swap(k, Math.floor(k / 2))
            k = Math.floor(k / 2)
        }
    }
    delMax() {
        if (this.pq.length === 1) {
            return "You cant remove from empty array "
        }
        let max = this.pq[1]
        this.swap(1, this.N)
        this.N--
        this.sink(1)
        this.pq[this.N + 1] = null
        return max

    }
    sink(k) {
        while (2 * k <= this.N) {
            let j = 2 * k
            if (j < this.N && this.compare(this.pq[j] , this.pq[j + 1]) < 0) j++
            if (this.compare(this.pq[k], this.pq[j]) >= 0) break
            this.swap(k, j)
            k = j
        }
    }

    swap(i, j) {
        let temp = this.pq[i]
        this.pq[i] = this.pq[j]
        this.pq[j] = temp
    }

    compare(a, b) {
        if(a.frq !== b.frq) {
            return a.frq - b.frq
        }
        return b.word.localeCompare(a.word)
    }

}

