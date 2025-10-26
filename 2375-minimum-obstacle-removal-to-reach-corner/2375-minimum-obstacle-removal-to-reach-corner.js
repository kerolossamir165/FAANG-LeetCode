/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minimumObstacles = function (grid) {
    let m = grid.length
    let n = grid[0].length
    const dist = Array.from({ length: m }, () => Array(n).fill(Infinity));
    const dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    
    let queue = new Deque()
    dist[0][0] = 0
    queue.pushFront([0, 0])

    while (!queue.isEmpty()) {
        let [r, c] = queue.popFront()

        if(r === m - 1 && c === n - 1) {
            return dist[r][c]
        }

        for (let [row, col] of dirs) {
            let newR = r + row
            let newC = c + col

            if (newR >= 0 && newC >=  0 && newR < m && newC < n ) {
             let cost = grid[newR][newC]
            let newDist = dist[r][c] + cost

            if (newDist < dist[newR][newC]) {
                dist[newR][newC] = newDist

                if (cost === 0) {
                    queue.pushFront([newR, newC])
                } else {
                    queue.pushBack([newR, newC])
                }
            }

            }

          
        }
    }
    return -1

};

