/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let map = {}
    let zeroCount = 0
    
    for(let i = 0 ; i < arr.length ; i++) {
       if (arr[i] === 0) {
            zeroCount++;
            if (zeroCount === 2) return true;
        }else if (map[arr[i] * 2] || (arr[i] % 2 === 0 && map[arr[i] / 2])){
            return true
            
        } else {
           map[arr[i]] = arr[i]
        }
    }
    return false
    
};