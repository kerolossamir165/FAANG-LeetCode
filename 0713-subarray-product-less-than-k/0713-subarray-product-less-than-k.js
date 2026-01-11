/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let left = 0 , right = 0 , count = 0 , product = 1 

    while(right < nums.length) {

        product = product * nums[right]

        while(product >= k && left <= right ) {
            product = product / nums[left]
            left++
        }

        count += right - left + 1
        right++
    }
    return count
};