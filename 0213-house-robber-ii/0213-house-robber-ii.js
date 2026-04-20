/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    //  rob linear street
    const robLinear = (arr) => {
        let prev1 = 0, prev2 = 0;
        for (let num of arr) {
            let temp = prev1;
            prev1 = Math.max(prev2 + num, prev1);
            prev2 = temp;
        }
        return prev1;
    };

    // Case 1: Exclude last house
    let case1 = robLinear(nums.slice(0, nums.length - 1));
    // Case 2: Exclude first house
    let case2 = robLinear(nums.slice(1));

    return Math.max(case1, case2);
};