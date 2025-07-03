/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length 

    for(let i = 0 ; i < n ; i++) {
        for(let j = i + 1 ; j < n ; j++) {
            [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
        }
    }
    for(let i = 0 ; i < n ;i++) {
        matrix[i].reverse()
    }
};


// var rotate2 = function(matrix) {
//     let n = matrix.length 

//     for(let layer = 0 ; layer < Math.floor(n / 2) ; layer++) {
//         let first = layer // start index in the layer
//         let last = n - 1 - layer // end index in the layer

//         for(let i = 0 ; i < last - first ; i++ ) {
//             let top = matrix[first][first + i ]

//             // Left -to→ Top

//             // Bottom -to→ Left

//             // Right -to→ Bottom

//             // Top (saved) -to→ Right

//             matrix[first][first + i] = matrix[last - i ][first]
//             matrix[last - i ][first] = matrix[last][last - i ]
//             matrix[last][last - i ] = matrix[first + i ][last]
//             matrix[first + i][last] = top;
//         }
//     }
// };