/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    return findPeak(arr)
};

function findPeak(arr) {
    let low = 0 
    let high = arr.length - 1 

    while (low < high ) {
        let mid = Math.floor((low + high) / 2)
        if(arr[mid] > arr[mid + 1 ] ) {
            high = mid 
        }else {
            low = mid + 1
        }
    }
    return low
}