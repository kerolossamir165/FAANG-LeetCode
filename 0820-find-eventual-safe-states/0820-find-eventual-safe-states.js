/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    const visited = {}; 
    let result = []

    function dfs(vertex) {
        if (visited[vertex] === 1) {
            return false
        }
        if (visited[vertex] === 2) {
            return true 
        }

        visited[vertex] = 1; // Mark as visiting
        if (graph[vertex]) {
            for (const neighbor of graph[vertex]) {
                
               if(!dfs(neighbor)) return false
                
            }
        }
        visited[vertex] = 2;
        return true 
    }

    for (const vertex in graph) {
        if(dfs(vertex)) {
            result.push(parseInt(vertex))
        }
        
    }

    return result
};