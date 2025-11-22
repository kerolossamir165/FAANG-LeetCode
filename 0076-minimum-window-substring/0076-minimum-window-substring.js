/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let table = {}
    let begin = 0, end = 0
    let length = Infinity
    let ans = ""

    for(let char of t) {
        if(table[char]) {
            table[char]++
        } else {
          table[char] = 1
        }
    }
    let counter = Object.keys(table).length

    while(end < s.length) {
        let endChar = s[end]
        if(endChar in table) {
            table[endChar]--
            if(table[endChar] === 0) counter--
        }
        end++


        while(counter === 0) {
            if(end - begin < length) {
                length = end - begin 
                ans = s.substring(begin ,end )
            }
            
            let startChar = s[begin]

            if(startChar in table) {
                table[startChar]++
                if(table[startChar] > 0) counter++

            }
            begin++
        }

    }
    return ans
    
};