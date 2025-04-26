/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
     let n = mountainArr.length();

    function findPeak() {
        let left = 0, right = n - 1;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }

    function binarySearchAscending(low, hi, key) {
        while (low <= hi) {
            let mid = Math.floor((low + hi) / 2);
            let val = mountainArr.get(mid);
            if (val === key) return mid;
            if (val < key) low = mid + 1;
            else hi = mid - 1;
        }
        return -1;
    }

    function binarySearchDescending(low, hi, key) {
        while (low <= hi) {
            let mid = Math.floor((low + hi) / 2);
            let val = mountainArr.get(mid);
            if (val === key) return mid;
            if (val > key) low = mid + 1;
            else hi = mid - 1;
        }
        return -1;
    }

    let peak = findPeak();

    if (mountainArr.get(peak) === target) return peak;

    let index = binarySearchAscending(0, peak - 1, target);
    if (index !== -1) return index;

    return binarySearchDescending(peak + 1, n - 1, target);
};