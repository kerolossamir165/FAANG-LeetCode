/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    /**Let's say you have an array and the sum of the array is odd. When you divide the array into two (left and right subarrays) their individual sums can be (odd, even) or (even, odd)
Let's say total sum is 13, you can divide the array such as (6,7), (7,6), (4,9) .... See, one is odd the other one is even. When you substract the other part from it, it always be odd. But the question wants even difference which is not the case. */
    const sum = nums.reduce((a, b) => a + b, 0);
    return sum % 2 === 0 ? nums.length - 1 : 0;
};