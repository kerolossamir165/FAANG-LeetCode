/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
        const bannedSet = new Set(banned);
    const freq = new Map();

    // Extract words: split on non-alpha characters, lowercase
    const words = paragraph.toLowerCase().split(/[^a-z]+/).filter(w => w.length > 0);

    let maxWord = '';
    let maxCount = 0;

    for (const word of words) {
        if (bannedSet.has(word)) continue;

        const count = (freq.get(word) || 0) + 1;
        freq.set(word, count);

        if (count > maxCount) {
            maxCount = count;
            maxWord = word;
        }
    }

    return maxWord;
    
};