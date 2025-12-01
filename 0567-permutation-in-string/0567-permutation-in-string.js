/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) { 
      let left = 0, right = 0
    let map = {}

    for (let char of s1) {
        if (map[char]) {
            map[char]++
        } else {
            map[char] = 1
        }
    }
    let counter = Object.keys(map).length

    
    while (right < s2.length) {
        
        if(map[s2[right]] !== undefined) {
            map[s2[right]]--
            
            if (map[s2[right]] === 0) {
                counter--
            }
        }        
         right++

        while (counter === 0) {            
            
            if ((right - left) === s1.length) {
                return true
            }

            let start = s2[left]
            if (map[start] !== undefined) {
                map[start]++
                if (map[start] > 0) {
                    counter++
                }
            }
            left++
         }

    }
    return false
};