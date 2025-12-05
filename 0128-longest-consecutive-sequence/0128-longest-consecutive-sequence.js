/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums)
    let longest = 0
    let currentLength = 0

    for(num of set) {
        if(!set.has(num - 1)) {
            current = num 
            currentLength = 1
            
        
            while(set.has(current + 1)) {
                current++
                currentLength++
            }
            longest = Math.max(longest, currentLength)
        }
    }

    return longest
    
};