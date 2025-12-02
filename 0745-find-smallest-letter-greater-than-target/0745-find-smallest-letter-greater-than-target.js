/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let n = letters.length 
    let left = 0 , right = letters.length 

    while(left <= right ) {
        let mid = Math.floor( (left + right) / 2 )
        if(letters[mid] <= target) {
            left = mid + 1 
        } else {
            right = mid - 1 
        }
    }
    return letters[left % n]
    
};