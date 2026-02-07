/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    //That block of code converts negative exponents into positive ones by inverting the base.
    if (n < 0){
        x = 1/x
        n = -n
    }
    function helper(x, n) {
        if(n === 0) return 1 

        let half = helper(x , Math.floor(n /2)) 

        if(n % 2 === 0) {
            return half * half
        } else {
            return half * half * x 
        }

    }
    return helper(x ,n )
};