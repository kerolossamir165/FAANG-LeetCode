/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let freq = {}
    let left = 0 , right = 0 , max = 0 , highest_repeated = 0


    while(right < s.length) {
        if(freq[s[right]]) {
           freq[s[right]]++ 
        }else {
            freq[s[right]] = 1
        }


        highest_repeated = Math.max(highest_repeated, freq[s[right]])

        let num_to_replace = (right - left + 1) - highest_repeated

        if(num_to_replace > k ) {
            freq[s[left]]--
            left++

        }
        max =  (right - left + 1) 
        right++
    }
    return max 
};