/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
   const romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let sum = 0

    for (let i = s.length - 1; i >= 0; i--) {
        const current = romanValues[s[i]];
        const prev = romanValues[s[i - 1]];
        if (i - 1 >= 0 && current > prev) { 
            sum += current - prev
            i--
        } else {
            sum += current
        }
    }
    return sum
};