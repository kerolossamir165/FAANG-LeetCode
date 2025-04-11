/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function(richer, quiet) {
    
    //graph with sorting based on "quietness" 
    let n = quiet.length 
    let graph = Array.from({length: n}, ()=> [])
    let inDegree = Array(n).fill(0)
    let queue = []
    //it initially store the index of the person themselves, assuming that each person is the quietest in their own "world" before we start graph traversal.
    let result = Array.from({ length: n }, (_ , i) => i)

    for (let [x ,y] of richer) {
        graph[x].push(y)
        inDegree[y]++
    }
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    while(queue.length > 0 ) {
        let node = queue.shift()
        for(let vertex of graph[node]) {
            result[vertex] = quiet[result[vertex]] < quiet[result[node]] ? result[vertex] : result[node]
            inDegree[vertex]--
            if(inDegree[vertex] === 0 ) {
                queue.push(vertex)
            }
        }
    }

    
    return result 
};