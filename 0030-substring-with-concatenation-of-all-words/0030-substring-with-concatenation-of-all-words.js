/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
   
    if (words.length === 0) return [];

    let wordSize = words[0].length;
    let windowSize = words.length * wordSize;
    let ans = [];

    if (s.length < windowSize) return ans;
    // Build frequency table
    let reference = {};

    for(let word of words) {
        if(reference[word]) {
            reference[word]++
        } else {
            reference[word] = 1
        }
    }

    for(let i = 0 ; i < wordSize ; i++ ) {
        let begin = i, end = i
        let table = {}

        while(end + wordSize <= s.length) {
            let lastWord = s.substr(end , wordSize)
            end += wordSize

            if(reference[lastWord] !== undefined) {
                table[lastWord] = (table[lastWord] || 0) + 1;

                while(table[lastWord] > reference[lastWord]) {
                    let beginWord = s.substr(begin , wordSize)
                    table[beginWord]--
                    begin += wordSize
                }

                if(end - begin === windowSize) {
                    ans.push(begin)
                }


            } else {
                table = {};
                begin = end;
            }
            
        }
    }
    
    return ans
};