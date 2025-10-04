/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
    let state = board.flat().join("")
    let resultState = "123450"

    let visited = {}
    let queue = []

    const directions = [
        [1, 3],
        [0, 2, 4],
        [1, 5],
        [0, 4],
        [1, 3, 5],
        [2, 4],
    ];

    queue.push([state , 0])
    visited[state] = true

    while(queue.length > 0) {
        let [currentState, moveCount] = queue.shift()
        if (currentState === resultState) {
            return moveCount 
        }

      let zeroPos = currentState.indexOf('0');

        
        for (let pos of directions[zeroPos]) {
            let newState = swap(currentState, zeroPos, pos)

            if(visited[newState]) continue

            visited[newState] = true
            queue.push([newState , moveCount+1])
        }
    }
    return -1    
};

function swap(str, i, j) {
    const arr = str.split('');
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr.join('');
}

