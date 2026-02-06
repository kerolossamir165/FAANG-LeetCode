/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    let left = Math.max(...nums)
    let right = nums.reduce((a ,b ) => a + b , 0)

    while(left < right) {
        let mid = Math.floor((left + right) / 2)

        if(canSplit(nums, mid , k)) {
            right = mid 
        } else {
            left = mid + 1
        }
    }
    return left 
    
};

function canSplit(nums , max , k) {
    let current = 0 
    let sup = 1 

    for(let num of nums ) {
        if(current + num > max) {
            sup++ 
            current = num
        } else {
            current += num
        }
    }
    return sup <= k
}