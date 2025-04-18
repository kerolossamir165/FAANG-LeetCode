/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    let graph = {}
    let distTo = Array(n).fill(Infinity);

    for (let [from, to, cost] of flights) {
        if (!graph[from]) {
            graph[from] = []
        }
        graph[from].push([to, cost])
    }
    let queue = [[ src, 0 , 0 ]]
    distTo[src] = 0

    while (queue.length > 0) {
        let [src, curCost, stops] = queue.shift()

        if (src === dst) {
            continue
        }
                
        if (stops <= k) {
            if (graph[src]) {
                for (let [to, cost] of graph[src]) {
                    let newCost = cost + curCost
                    let newStop = stops + 1
                    if (distTo[to] > newCost) {
                        distTo[to] = newCost
                        queue.push([to, newCost, newStop])
                    }
                }
            }
        }
    }
    
    return distTo[dst] === Infinity ? -1 : distTo[dst]
};