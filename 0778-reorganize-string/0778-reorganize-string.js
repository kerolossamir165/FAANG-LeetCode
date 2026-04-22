/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
    // Count frequency of each character
    let freq = new Map();
    for (let char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    // max frequency
    let maxFreq = 0;
    let maxChar = '';
    for (let [char, count] of freq.entries()) {
        if (count > maxFreq) {
            maxFreq = count;
            maxChar = char;
        }
    }

    // If ===> max frequency > (n+1)/2
    if (maxFreq > Math.ceil(s.length / 2)) return "";

    // Fill result array
    let res = new Array(s.length);
    let index = 0;

    // Place the most frequent character first
    while (freq.get(maxChar) > 0) {
        res[index] = maxChar;
        index += 2;
        freq.set(maxChar, freq.get(maxChar) - 1);
    }

    // Place the rest of the characters
    for (let [char, count] of freq.entries()) {
        while (count > 0) {
            if (index >= s.length) index = 1; 
            res[index] = char;
            index += 2;
            count--;
        }
    }

    return res.join('');
};