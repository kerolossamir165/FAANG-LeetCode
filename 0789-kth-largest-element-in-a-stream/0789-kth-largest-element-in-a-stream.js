/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.heap = [null]
    this.N = 0
    this.k = k

    for(let i = 0 ; i < nums.length ; i++) {
        this.add(nums[i])
    }

};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.heap[++this.N] = val
    this.swim(this.N)
    if (this.N > this.k) {
        this.deleteMin()
    }
    return this.heap[1]
};

KthLargest.prototype.deleteMin = function () {
    let min = this.heap[1]
    this.swap(1 , this.N)
    this.N--
    this.sink(1)
    return min
}

KthLargest.prototype.sink = function (k) {
    while (2 * k <= this.N) {
        let j = 2 * k;
        if (j < this.N && this.heap[j] > this.heap[j + 1]) j++;
        if (this.heap[k] <= this.heap[j]) break;
        this.swap(k, j);
        k = j;
    }

}

KthLargest.prototype.swim = function (k) {
    while (k > 1 && this.heap[Math.floor(k / 2)] >= this.heap[k]) {
        this.swap(k, Math.floor(k / 2))
        k = Math.floor(k / 2)
    }
}
KthLargest.prototype.swap = function (i, j) {
    let temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
}

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */