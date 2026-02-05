/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0 , right = 1 , max = 0

    while(right < prices.length) {

        if(prices[left] < prices[right]) {
            let diff = prices[right] - prices[left]
            max = Math.max(max , diff)
        } else {
            left = right
        }
        right++
    }

    return max
    
};