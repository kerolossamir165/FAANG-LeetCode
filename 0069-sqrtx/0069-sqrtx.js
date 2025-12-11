/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // we need to get the number that when we squaring it will be x 
    // so we will search between 1 to x 
    // if the squaring of mid > x so it will be in the left half 
    // if the squaring of mid < x so it will be in the right half 
    // if equal then the mid will be the number 
    // in the loop if left has moved past right At that point:
    // right is the largest number whose square is still ≤ x.
    // left is the smallest number whose square is > x.


    // We start with 1 because 0 is already handled separately
    if(x === 0 || x === 1) return x

    let left = 1
    let right = x 
    while(left <= right) {
        let mid = Math.floor((left + right) /2 )

        if(mid * mid > x) {
            right = mid - 1
        } else if (mid * mid < x) {
            left = mid + 1
        } else {
            return mid
        }
    }
    return Math.round(right)
};