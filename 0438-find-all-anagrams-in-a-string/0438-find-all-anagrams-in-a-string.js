/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let table = {}
    let begin = 0 , end = 0
    let ans = []
    for(let str of p) {
        if(table[str]) {
            table[str]++
        } else {
            table[str] = 1
        }
    }

    let counter = Object.keys(table).length

    while(end < s.length) {
        let endChar = s[end]
        if(endChar in table) {
            table[endChar]--
            if( table[endChar] === 0) counter--
        }
        end++
        while(counter === 0) {
            if(end - begin == p.length) {
                ans.push(begin)
            }
            let beginChar = s[begin]
            if(beginChar in table) {
                table[beginChar]++
                 if( table[beginChar] > 0) counter++
            }
            begin++
        }
    }
    return ans
    
};