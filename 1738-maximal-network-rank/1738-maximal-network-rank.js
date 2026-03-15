/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
    let degree = Array.from({length: n} , ()=> 0)
    let road = new Set()

    for (let [c1, c2] of roads) {
        degree[c1]++
        degree[c2]++
        road.add(`${c1}+${c2}`)
        road.add(`${c2}+${c1}`)
    }
    let max = 0 

    for(let i = 0 ; i < n ; i++) {
        for(let j = i + 1 ; j < n ; j++) {
            let current = degree[i] + degree[j] 

            if(road.has(`${i}+${j}`)) {
                current--
            }
            max = Math.max(max , current)
        }
    }
    return max 
};