/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const freq = new Map();
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    const entries = [...freq.entries()];
    entries.sort((a, b) => b[1] - a[1]);
    return entries.slice(0, k).map(e => e[0]);
};