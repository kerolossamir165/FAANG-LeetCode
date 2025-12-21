/**
 * @param {number} n
 * @return {number}
 */

var totalNQueens = function(n) {
    let res = 0
    let colSet = new Set()  
    let diagnolSet = new Set() 
    let anti_diagnolSet = new Set() 
    function dfs(r) {
        if(r === n) {
            res++ 
            return 
        }

        for(let c = 0 ; c < n ; c++) {
            let current_diagnol = r - c 
            let current_anti_diagnol = r + c

            if(colSet.has(c) || diagnolSet.has(current_diagnol) || anti_diagnolSet.has(current_anti_diagnol) )
                continue
            colSet.add(c)
            diagnolSet.add(current_diagnol)
            anti_diagnolSet.add(current_anti_diagnol)
            dfs(r+1)
            colSet.delete(c)
            diagnolSet.delete(current_diagnol)
            anti_diagnolSet.delete(current_anti_diagnol)

        }
    }
    dfs(0)
    return res
};



