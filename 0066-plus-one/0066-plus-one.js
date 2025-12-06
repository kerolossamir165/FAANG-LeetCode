/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length - 1

    /**
        Increment starts at the last digit: you add 1 to the rightmost digit.
        If it’s less than 10, you’re done. 
        If it’s 10, you set it to 0 and carry 1 to the next digit.
            ---Carry means “add 1 to the next digit”----

        in  overflow case: when - i < 0 
            Each digit becomes 0 , but still have a carry.
            That leftover carry is exactly 1, so you insert it at the front (unshift(1)).
     */
    while(i >= 0 ) {
        digits[i] += 1
        if(digits[i] < 10) break 
        digits[i] = 0 
        i--
    }
    if(i < 0) {
        digits.unshift(1)
    }
    return digits
}; 