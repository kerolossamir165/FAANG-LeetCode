/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
        let adj = {}
    for (let i = 0; i < numCourses; i++) {
        adj[i] = []
    }
    for(let [a , b] of prerequisites) {
        adj[b].push(a)
    }

    let hasCycle= false 

    function dfsOrder(graph) {        
        let visited = {};
        let recStack = {}
         for (let i = 0; i < numCourses; i++) {
            if (!visited[i]) {
                if (dfs(graph, visited, i, recStack) === null) {
                    hasCycle = true
                    return null
                }
            }
         }
    }
    function dfs(graph, visited, i, recStack) {
        visited[i] = true;
        recStack[i] = true
        
        for (let vertex of graph[i]) {
            if (!visited[vertex]) {
                if (dfs(graph, visited, vertex, recStack) === null) {
                    return null;
                }
            } else if (recStack[vertex]) {
                return null;
            }
        }
        delete recStack[i];
    }

   dfsOrder(adj)
    
   return hasCycle ? false : true 
};