/**
 * @param {number} num
 * @return {string}
 */

// Walkthrough: 1994
// 1994 >= 1000 → "M", num=994
// 994 >= 900  → "MCM", num=94
// 94 >= 90    → "MCMXC", num=4
// 4 >= 4      → "MCMXCIV", num=0
var intToRoman = function(num) {
   // Include subtractive forms in the table — no special case logic needed
    const values  = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];

    let result = '';

    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        }
    }

    return result;  
};

