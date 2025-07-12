/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function (nums) {
//     let left = 0
//     let right = left + 1

//     while (right < nums.length) {
//         if (nums[left] !== 0) {
//             left++
//             right++
//         }else {
//             if(nums[right] !== 0) {
//                 swap(nums, left, right)
//                 left++
//             }
//             right++
//         }
//     }
//     return nums
// };

// function swap(arr, i, j) {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }

var moveZeroes = function (nums) {
    let pointer = 0 

  for(let i = 0 ; i < nums.length ; i++) {
        if(nums[i] !== 0) {
            [nums[pointer], nums[i]] = [nums[i], nums[pointer]]
            pointer++
        }
  }
  return nums
}