/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let matrix = Array.from({ length: n }, () => Array(n).fill(null));
    let DIRECTION = [
        [0 , 1],
        [1 , 0],
        [0 , -1],
        [-1 , 0]
    ]
    let x = 0, y = 0
    let pos = 0 

    for(let i = 1 ; i <= n*n ; i++) {
        matrix[x][y] = i 

        let nextValidRow = x + DIRECTION[pos][0]
        let nextValidCol = y + DIRECTION[pos][1]

        if(nextValidRow < 0 || nextValidRow >= n || 
        nextValidCol < 0 || nextValidCol >= n  || 
         matrix[nextValidRow][nextValidCol] !== null
        ) {
            pos = (pos + 1) % 4 
        }

        x += DIRECTION[pos][0]
        y += DIRECTION[pos][1]

    }
    return matrix
};