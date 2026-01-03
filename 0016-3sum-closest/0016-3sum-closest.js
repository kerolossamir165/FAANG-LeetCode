/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a , b) => a - b)
    let closest = nums[0] + nums[1] + nums[2]

    for(let i = 0 ; i < nums.length - 2 ; i++) {
        let j = i + 1 
        let c = nums.length - 1

        while( j < c ) {
            let sum = nums[i] + nums[j] + nums[c]

            if(Math.abs(target - sum) < Math.abs(target - closest)) {
                closest = sum
            }

            if(sum < target) {
                j++
            }
            else {
                c--
            }
        }
    }
    return closest
};