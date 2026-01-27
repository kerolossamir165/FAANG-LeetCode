/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0 , right = nums.length - 1 

    while(left < right) {
        let mid = Math.floor((left + right) / 2)
        if(nums[mid] > nums[right]) {
            // Min in right half
            left = mid + 1
        } else if (nums[mid] < nums[right]) {
            //Min in left half (could be mid)
            right = mid
        } else {
            //Duplicates
            right--
        }
    }
    return nums[left] 
    
};