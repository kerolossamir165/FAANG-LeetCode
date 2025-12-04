/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
     let map = {}
    
    for (let i = 0; i < numbers.length; i++) {
        
        let sum = target - numbers[i] 

        if(map[sum]) {
            return [ map[sum], i + 1]
        } else {
            map[numbers[i]] = i + 1 
        }
       
    }    
    return []
};