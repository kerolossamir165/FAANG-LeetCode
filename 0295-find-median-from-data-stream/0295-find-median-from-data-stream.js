
class MaxPQ {
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
    max() {
        return this.pq[1]
    }
    swim(k) {
        while (k > 1 && this.pq[Math.floor(k / 2)] < this.pq[k]) {
            this.swap(k, Math.floor(k / 2))
            k = Math.floor(k / 2)
        }
    }
    delMax() {
        if (this.N === 0) {
            return "You can't remove from empty heap";
        }
        let max = this.pq[1];
        this.swap(1, this.N);
        this.pq[this.N] = null; // cleanup
        this.N--;
        this.sink(1);
        return max;

    }
    sink(k) {
        while (2 * k <= this.N) {
            let j = 2 * k
            if (j < this.N && this.pq[j] < this.pq[j + 1]) j++
            if (!(this.pq[k] <= this.pq[j])) break
            this.swap(k, j)
            k = j
        }
    }

    swap(i, j) {
        let temp = this.pq[i]
        this.pq[i] = this.pq[j]
        this.pq[j] = temp
    }

}

class MinPQ {
    constructor() {
        this.pq = [null]; // index 0 unused
        this.N = 0;
    }

    isEmpty() {
        return this.N === 0;
    }

    min() {
        if (this.N === 0) return null;
        return this.pq[1];
    }

    insert(x) {
        this.pq[++this.N] = x;
        this.swim(this.N);
    }

    swim(k) {
        while (k > 1 && this.pq[Math.floor(k / 2)] > this.pq[k]) {
            this.swap(k, Math.floor(k / 2));
            k = Math.floor(k / 2);
        }
    }

    delMin() {
        if (this.N === 0) {
            return "You can't remove from empty heap";
        }
        let min = this.pq[1];
        this.swap(1, this.N);
        this.pq[this.N] = null; // cleanup
        this.N--;
        this.sink(1);
        return min;
    }

    sink(k) {
        while (2 * k <= this.N) {
            let j = 2 * k;
            if (j < this.N && this.pq[j] > this.pq[j + 1]) j++;
            if (this.pq[k] <= this.pq[j]) break;
            this.swap(k, j);
            k = j;
        }
    }

    swap(i, j) {
        [this.pq[i], this.pq[j]] = [this.pq[j], this.pq[i]];
    }
}




var MedianFinder = function () {
    // the max is the larger element in the smallest number 
    this.left = new MaxPQ()
    // the min is the smallest element in the larger number 
    this.right = new MinPQ()

};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    
    if (this.left.isEmpty() || this.left.max() >= num) {
        this.left.insert(num)
    } else {
        this.right.insert(num)
    }

    
    if (this.left.N > this.right.N + 1) {
        this.right.insert(this.left.delMax())

    } else if (this.right.N > this.left.N + 1) {

        this.left.insert(this.right.delMin())
    }
  
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {   
     if (this.left.N === this.right.N) {
        return (this.left.max() + this.right.min()) / 2;
    } else if (this.left.N > this.right.N) {
        return this.left.max();
    } else {
        return this.right.min();
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */