/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let n = matrix.length  , m = matrix[0].length 
    
    if (n == 1 && m == 1){
        return matrix[0][0] == target
    }
    let left = 0 , right = (n * m) - 1

    while(left <= right ) {
        let mid = Math.floor((left+right) / 2)

        let r = Math.floor(mid / m), c = mid % m

        if(matrix[r][c] === target) {
            return true 
        } else if (matrix[r][c] > target) {
            right = mid - 1 
        } else {
            left = mid + 1 
        }

    }
    return false 
    
};