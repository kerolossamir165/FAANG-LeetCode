/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let slow = n
    let fast = n

    while(true) {
       slow = getNextNum(slow)
       fast = getNextNum(getNextNum(fast))

        if(fast === 1 )  {
            return true 

        } 
       // it indicates the presence of a cycle, meaning
       // the number is not a happy number. Otherwise, the algorithm will end when we reach 1
        else if (fast == slow ) {
            return false
        }
    }

    
};

function getNextNum(x) {
    let next = 0 
    while(x > 0) {
        let digit = x % 10
        
        x =  Math.floor(x / 10)
        
        next += digit ** 2
    }
    return next 
}