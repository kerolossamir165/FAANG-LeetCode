/**
 * @param {number[][]} grid
 * @return {number}
 */

let directions = [
    [1,0],
    [0,1],
    [1,1],
    [-1,0],
    [0,-1],
    [-1,-1],
    [1,-1],
    [-1,1]
]
var shortestPathBinaryMatrix = function(grid) {
    let n = grid.length 

    if(grid[0][0] === 1 || grid[n -1][n-1] === 1) return -1

    let queue = [[0,0 , 1]]
    let visited = new Set() 
    visited.add("0,0");

    while(queue.length ) {
        let current = queue.shift() 
        let row = current[0] , col = current[1] , path = current[2]

        if(row === n- 1 && col === n - 1) return path 

        for(let dir of directions) {
            let newRow = row + dir[0]
            let newCol = col + dir[1]

            if(
                newRow >= 0 && newRow < n && 
                newCol >= 0 && newCol < n && 
                grid[newRow][newCol] === 0 && 
                !visited.has(`${newRow},${newCol}`)
            ) {
                queue.push([newRow, newCol , path+1])
                visited.add(`${newRow},${newCol}`)
            }

        }
    }
    return -1
    
};