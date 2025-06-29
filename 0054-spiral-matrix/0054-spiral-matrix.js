/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(!matrix.length || !matrix[0].length) return []

    let spiral = []
    let rows = matrix.length 
    let cols = matrix[0].length 
    let left  = 0 , top = 0 , right = cols - 1, 
    bottom = rows - 1

    while(left <= right && top <= bottom) {
        for(let col = left ; col <= right; col++) {
            spiral.push(matrix[top][col])
        }
        top++
        for(let row = top ; row <= bottom ; row++) {
            spiral.push(matrix[row][right])
        }
        right--

        if(top <= bottom) {
            for(let col = right ; col >= left ; col-- ) {
                spiral.push(matrix[bottom][col])
            }
            bottom--
        }

        if(left <= right) {
            for(let row = bottom ; row >= top ; row-- ) {
                spiral.push(matrix[row][left])
            }
            left++
        }

    }
    return spiral
}