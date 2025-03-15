/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// function swap(arr, i , j) {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }
// function shuffle(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let rand = Math.floor(Math.random() * (i + 1))

//         swap(arr, i, rand)
//     }
//     return arr
// }

// function partition(arr, low , hi) {
//     let i = low 
//     let j = hi + 1 

//     while(true) {
//         while(arr[++i] <= arr[low]) {
//             if(i === hi) break
//         }

//         while(arr[--j] >= arr[low]) {
//             if(j === low ) break
//         }

//         if(i >= j) break

//         swap(arr, i , j)
//     }

//     swap(arr, low , j)
//     return j
// }
// var findKthLargest = function (nums, k) {

//     let low = 0
//     let hi = nums.length - 1
//     k = nums.length - k
//     nums = shuffle(nums)

//     while(low < hi) {
//         let j = partition(nums, low , hi)

//         if(j < k) {
//             low = j + 1 
//         }else if (j > k ) {
//             hi = j - 1
//         }else {
//             return nums[j]
//         }
//     }
//     return nums[k]
// };


class PQ {
    constructor() {
        this.pq = [null]
        this.N = 0
    }
    isEmpty() {
        return this.pq.length === 0
    }

    insert(x) {
        this.pq[++this.N] = x
        this.swim(this.N)
    }
    swim(k) {
        while (k > 1 && this.pq[Math.floor(k / 2)] < this.pq[k]) {
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
            if (j < this.N && this.pq[j] < this.pq[j + 1]) j++
            if (!(this.pq[k] < this.pq[j])) break
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
var findKthLargest = function (nums, k) {
    let pq = new PQ()

    for (let i = 0; i < nums.length; i++) {
        pq.insert(nums[i])
    }
    
    let result = null;
    for (let i = 0; i < k; i++) {
        result = pq.delMax();
    }

    return result; 
};