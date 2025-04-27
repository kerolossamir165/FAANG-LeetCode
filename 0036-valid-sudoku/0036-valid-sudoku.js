/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let row = board.length 
    let col = board[0].length 
    const rowSets = Array.from({ length: 9 }, () => new Set());
    let colSets = Array.from({ length: 9 }, () => new Set());
    const subgridSets = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => new Set()));

    
    for(let r = 0 ; r < row ; r++ ) {
        for(let c = 0 ; c < col ; c++) {
            let num = board[r][c]            
            if(num == '.')
                continue 
            if(rowSets[r].has(num)) {
                return false 
            }
            if (colSets[c].has(num)) {
                return false
            }
            if (subgridSets[Math.floor(r / 3)][Math.floor(c / 3)].has(num)){
                return false 
            }
            rowSets[r].add(num)
            colSets[c].add(num)
            subgridSets[Math.floor(r / 3)][Math.floor(c / 3)].add(num)
        }
    }
    return true 

};