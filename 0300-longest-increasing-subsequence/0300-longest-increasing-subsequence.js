/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let sub = [];

    for (let num of nums) {
        let left = 0, right = sub.length;

        // Binary search for the position to replace
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (sub[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // If left == sub.length, append; otherwise replace
        if (left < sub.length) {
            sub[left] = num;
        } else {
            sub.push(num);
        }
    }

    return sub.length;
};