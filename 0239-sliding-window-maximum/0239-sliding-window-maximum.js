/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let res = []
    let dq = []
    let left = 0 , right = 0 

    while(right < nums.length) {
        while(dq.length > 0 && dq[dq.length - 1][0] <= nums[right]) {
            dq.pop()
        }

        dq.push([nums[right], right]) 

        if(right - left + 1 === k) {
            if(dq.length &&  dq[0][1]  < left) {
                dq.shift() 
            }

            res.push(dq[0][0]);
            left++;
        }
        right++
    }

    return res
    
};