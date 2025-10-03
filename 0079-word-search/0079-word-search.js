/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let col = board[0].length
    let row = board.length 

    function dfs(i , j , k ) {
        if(k === word.length) return true 

        if (i < 0 || j < 0 || i >= row || j >= col || board[i][j] !== word[k])
            return false;

        let visited = board[i][j]
        board[i][j] = "*"

        let dirs = [
            [0 , 1],
            [0  , -1],
            [1 , 0],
            [-1 , 0]
        ]

        for(let [r, c] of dirs) {
            if(dfs(i+r, j+c , k+1)) {
                return true 

            }
        }

        board[i][j] = visited;
        return false;
    }




    for(let i = 0 ; i < row ; i++) {
        for(let j = 0 ; j < col ; j++) {
            if(dfs(i, j , 0)) {
                return true
            }
        }
    }

    return false

    
};