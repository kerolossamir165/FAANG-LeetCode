/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let arr = []

    for(let i = 0 ; i < matrix[0].length ; i++) {
        arr.push([])
        for(let j = 0 ; j < matrix.length ; j++) {
            arr[arr.length - 1].push(matrix[j][i])
        }
    }
    return arr
};