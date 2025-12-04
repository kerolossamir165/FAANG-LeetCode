/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let map = {}
    for(let i = 0 ; i < numbers.length ; i++) {
        let sum = target - numbers[i]
        map[numbers[i]] = i + 1 
    }    
    for (let i = 0; i < numbers.length; i++) {
        
        let sum = target - numbers[i] 
        if(map[sum]) {
            return [i + 1, map[sum]]
        }
       
    }    
    return []
    
};