/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let n = arr.length 
    if(n < 3) return false 
    let pointer = 0 
    while(pointer + 1 < n && arr[pointer] < arr[pointer+1]) {
        pointer++
    }

    if(pointer === 0 || pointer === n - 1) return false 

      while(pointer + 1 < n && arr[pointer] > arr[pointer+1]) {
        pointer++
    }
    return pointer === n - 1
};