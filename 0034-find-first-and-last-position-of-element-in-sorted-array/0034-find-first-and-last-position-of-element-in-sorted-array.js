/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first = findtheFirstPosition(nums, target) 
    let last = findtheLastPosition(nums, target)
    return [first ,last]
    
};

function findtheFirstPosition(nums, target)  {
    let left = 0 
    let right = nums.length - 1 
    while(left < right) {
        let mid = Math.floor((left + right ) / 2) 
        if(nums[mid] > target) {
            right = mid - 1 
        }else if (nums[mid] < target) {
            left = mid + 1 
        } else {
            right = mid
        }
    }

    return nums[left] === target ? left : -1
}
function findtheLastPosition(nums, target)  {
    let left = 0 
    let right = nums.length - 1 
    while(left < right) {
        let mid = Math.floor((left + right ) / 2) + 1 
        if(nums[mid] > target) {
            right = mid - 1 
        }else if (nums[mid] < target) {
            left = mid + 1 
        } else {
            left = mid
        }
    }

    return nums[right] === target ? right : -1
}