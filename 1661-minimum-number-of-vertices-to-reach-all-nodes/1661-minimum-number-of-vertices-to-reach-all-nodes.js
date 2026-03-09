/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    let hasIncommingEdge = Array.from({lenght : n}, () => false)
    let result = []

    for(let edge of edges ) {
        hasIncommingEdge[edge[1]] = true
    }

    for(let i = 0 ; i < n ; i++){
        if(!hasIncommingEdge[i]) {
            result.push(i)
        }
    }
    return result
    
};