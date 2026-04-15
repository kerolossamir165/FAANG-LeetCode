/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length === 0) return 0;

    let n = prices.length;
    // max profit when holding a stock
    let hold = -prices[0];
    // max profit when just sold
    let sold = 0;
    // max profit when resting (cooldown or nothing)  
    let rest = 0;

    for (let i = 1; i < n; i++) {
        let prevHold = hold;
        let prevSold = sold;
        let prevRest = rest;

        // buy or keep holding
        hold = Math.max(prevHold, prevRest - prices[i]);
        // sell today
        sold = prevHold + prices[i];
        // cooldown or keep resting                   
        rest = Math.max(prevRest, prevSold);
    }

    return Math.max(sold, rest);
};