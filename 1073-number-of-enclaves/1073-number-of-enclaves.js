/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
    let rows = grid.length
    let cols = grid[0].length
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === 0) {
            return;
        }

        grid[i][j] = 0
        // dfs(i + 1, j); // down
        // dfs(i - 1, j); // up
        // dfs(i, j + 1); // right
        // dfs(i, j - 1); // left
        for (const [dx, dy] of directions) { 
            const newRow = i + dx; 
            const newCol = j + dy; 
            dfs( newRow, newCol); 
        }

    }

    for (let i = 0; i < rows; i++) {
        // first column 
        if (grid[i][0] === 1) dfs(i, 0)
        //  last column 
        if (grid[i][cols - 1] === 1) dfs(i, cols - 1)
    }

    for (let i = 0; i < cols; i++) {
        // first row 
        if (grid[0][i] === 1) dfs(0, i)
        //last row 
        if (grid[rows - 1][i] === 1) dfs(rows - 1, i)
    }

    let count = 0
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                count++
            }
        }
    }
    return count


};