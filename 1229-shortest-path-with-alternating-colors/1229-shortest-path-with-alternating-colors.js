/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
    let RED = 0, BLUE = 1
    let redAdj = Array.from({ length: n }, () => [])
    let blueAdj = Array.from({ length: n }, () => [])

    for (let [v, u] of redEdges) {
        redAdj[v].push(u)
    }
    for (let [v, u] of blueEdges) {
        blueAdj[v].push(u)
    }

    let queue = []
    queue.push([0, RED])
    queue.push([0, BLUE])

    const dist = Array.from({ length: n }, () => [Infinity, Infinity]);
    dist[0][RED] = 0;
    dist[0][BLUE] = 0;

    while(queue.length) {
        let [node, color] = queue.shift()

        let nextColor = 1 - color
        const neighbors = nextColor === RED ? redAdj[node] : blueAdj[node];

        for(let neighbor of neighbors) {
            if(dist[neighbor][nextColor] === Infinity ) {
               dist[neighbor][nextColor] = dist[node][color] + 1
               queue.push([neighbor, nextColor])  
            }
        }
    }

    let ans = []

    for(let [red , blue] of dist){
        let path = Math.min(red,  blue)
        ans.push(path === Infinity ? -1 : path)
    }
    return ans


};