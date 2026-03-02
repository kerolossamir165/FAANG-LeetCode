/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
    let rows = maze.length
    let cols = maze[0].length

    let direction = [
        [0, 1], // right
        [1, 0], // down 
        [0, -1], // left 
        [-1, 0] // up
    ]
    let queue = []
    queue.push([entrance[0], entrance[1], 0])
    maze[entrance[0]][entrance[1]] = "+"

    while (queue.length > 0) {
        const [row, col, steps] = queue.shift();

        for (let [dr, dc] of direction) {
            let newRow = row + dr
            let newCol = col + dc

            if (
                newRow >= 0 && newRow < rows &&
                newCol >= 0 && newCol < cols &&
                maze[newRow][newCol] === '.'
            ) {
                //If the new position is at the border of the maze and not the entrance, return the current steps + 1.
                if (
                    (newRow === 0 || newRow === rows - 1 ||
                    newCol === 0 || newCol === cols - 1 ) &&
                   !( newRow == entrance[0] && newCol == entrance[1] )){
                    return steps + 1
                }

                maze[newRow][newCol] = '+'
                queue.push([newRow, newCol , steps+1])

            }
        }
    }
    return -1

};