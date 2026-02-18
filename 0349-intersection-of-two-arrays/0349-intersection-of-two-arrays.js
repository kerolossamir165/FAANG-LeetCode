/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function(nums1, nums2) {
    
//  nums2.sort() 
//     let result = new Set()

//     for(let num of nums1) {
//         if(search(nums2 , num)) {
//             result.add(num)
//         }
//     }
//     return [...result]
// };

// function search(nums, target){
//     let left = 0 , right = nums.length -1
    
//     while (left <= right) {
//         mid = Math.floor((left + right) /2)
//         if (nums[mid] == target)
//             return true
//         else if (nums[mid] < target)
//             left = mid + 1
//         else
//             right = mid - 1
//     }
//     return false
// }
var intersection = function (nums1, nums2) {
    nums1.sort((a , b) => a - b )
    nums2.sort((a , b) => a - b )
    
    let i = 0, j = 0, result = new Set()

    while (i < nums1.length && j < nums2.length) {
     
        if (nums1[i] === nums2[j]) {
           result.add(nums1[i])
            i++
            j++
        } else if (nums1[i] < nums2[j]) {
            i++
        } else {
            j++
        }
    }
    return [...result]

}
