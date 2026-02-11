/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.prefix = [w[0]]
    for(let i = 1 ; i < w.length ; i++) {
        this.prefix.push(this.prefix[this.prefix.length - 1] + w[i])
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let target =  Math.floor(Math.random() * this.prefix[this.prefix.length - 1]) + 1;
    let left = 0 , right = this.prefix.length - 1 

    while(left < right ) {
        let mid = Math.floor((left + right) / 2)
        if(this.prefix[mid] < target) {
            left = mid + 1
        } else {
            right = mid 
        }
    }
    return left 
};



/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */