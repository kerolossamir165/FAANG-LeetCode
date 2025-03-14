/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function swap(arr, i , j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
function shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
        let rand = Math.floor(Math.random() * (i + 1))

        swap(arr, i, rand)
    }
    return arr
}

function partition(arr, low , hi) {
    let i = low 
    let j = hi + 1 

    while(true) {
        while(arr[++i] <= arr[low]) {
            if(i === hi) break
        }

        while(arr[--j] >= arr[low]) {
            if(j === low ) break
        }

        if(i >= j) break

        swap(arr, i , j)
    }

    swap(arr, low , j)
    return j
}
var findKthLargest = function (nums, k) {

    let low = 0
    let hi = nums.length - 1
    k = nums.length - k
    nums = shuffle(nums)

    while(low < hi) {
        let j = partition(nums, low , hi)

        if(j < k) {
            low = j + 1 
        }else if (j > k ) {
            hi = j - 1
        }else {
            return nums[j]
        }
    }
    return nums[k]
};

