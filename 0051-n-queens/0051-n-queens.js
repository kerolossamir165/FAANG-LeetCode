/**
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = function(n) {
    let res = []
    let colSet = new Set()  
    let diagnolSet = new Set() 
    let anti_diagnolSet = new Set() 
    let board = Array(n).fill().map(() => Array(n).fill('.'))

    function dfs(r) {
        if (r === n) {
            res.push(board.map(row => row.join('')))
            return
        }

        for (let c = 0; c < n; c++) {
            let current_diagnol = r - c
            let current_anti_diagnol = r + c

            if (colSet.has(c) || diagnolSet.has(current_diagnol) || anti_diagnolSet.has(current_anti_diagnol))
                continue
            colSet.add(c)
            diagnolSet.add(current_diagnol)
            anti_diagnolSet.add(current_anti_diagnol)
            board[r][c] = 'Q'
            dfs(r + 1)
            colSet.delete(c)
            diagnolSet.delete(current_diagnol)
            anti_diagnolSet.delete(current_anti_diagnol)
            board[r][c] = '.'

        }
    }
    dfs(0)
    return res
};


