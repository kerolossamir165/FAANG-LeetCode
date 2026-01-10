/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
        let lastOccurre = new Array(26)
        for(let i = 0 ; i < s.length ; i++) {
            //where each character appears for the last time.
            //This helps us determine the boundaries of a partition dynamically while iterating through the string.
            lastOccurre[s.charCodeAt(i) - 97] = i
        }

        let start = 0 , right = 0,  result = []

        for(let i = 0 ; i < s.length ; i++) {
            right = Math.max(right , lastOccurre[s.charCodeAt(i) - 97])

            if(i === right) {
                result.push(right - start + 1)
                start = right + 1
            }
        }

        return result
};