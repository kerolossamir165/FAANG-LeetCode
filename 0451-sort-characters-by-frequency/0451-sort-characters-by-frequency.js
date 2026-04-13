/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let freq = new Map();
    for (let char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    // Sort characters by frequency descending
    let sorted = Array.from(freq.entries()).sort((a, b) => b[1] - a[1]);

    let res = '';
    for (let [char, count] of sorted) {
        res += char.repeat(count);
    }

    return res;
};