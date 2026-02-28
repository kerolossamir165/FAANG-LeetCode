/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    let queue = [start]
    let visited = new Set()

    visited.add(start) 

    while(queue.length) {
        let curr = queue.shift() 

        if(arr[curr] === 0 ) return true 

        let neighbours = [
            curr + arr[curr] , curr - arr[curr]
        ]  

        for(let value of neighbours ) {

            if(value >= 0 && value < arr.length && !visited.has(value)) {
                queue.push(value)
                visited.add(value)
            }
        }
    }
    return false
    
};