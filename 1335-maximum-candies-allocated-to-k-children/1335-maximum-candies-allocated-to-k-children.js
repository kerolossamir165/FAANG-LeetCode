/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
    function canShare(limit) {
        let count = 0 
        for(let candy of candies) {
            count += Math.floor(candy / limit) 
            if(count >= k) return true 
        }
    return false 
    }

    let left = 1 , right = Math.max(...candies)
    let result = 0 

    while(left <= right) {
        let mid = Math.floor((left + right) / 2)
        if(canShare(mid)) {
            result = mid 
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return result 
};

