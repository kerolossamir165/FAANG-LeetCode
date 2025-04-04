/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */


var findOrder = function(numCourses, prerequisites) {
//         let adj = {}
//     for (let i = 0; i < numCourses; i++) {
//         adj[i] = []
//     }
//     for(let [a , b] of prerequisites) {
//         adj[b].push(a)
//     }

//     let stack = []
//     let hasCycle= false 

//     function dfsOrder(graph) {        
//         let visited = {};
//         let recStack = {}
//          for (let i = 0; i < numCourses; i++) {
//             if (!visited[i]) {
//                 if (dfs(graph, visited, i, recStack) === null) {
//                     hasCycle = true
//                     return null
//                 }
//             }
//          }
//     }
//     function dfs(graph, visited, i, recStack) {
//         visited[i] = true;
//         recStack[i] = true
        
//         for (let vertex of graph[i]) {
//             if (!visited[vertex]) {
//                 if (dfs(graph, visited, vertex, recStack) === null) {
//                     return null;
//                 }
//             } else if (recStack[vertex]) {
//                 return null;
//             }
//         }
//         delete recStack[i];
//         stack.push(i);
//     }

//    dfsOrder(adj)
    
//    return hasCycle ? [] : stack.reverse()

    let adj = {}
    for (let i = 0; i < numCourses; i++) {
        adj[i] = []
    }
    for(let [a , b] of prerequisites) {
        adj[b].push(a)
    }
 
    let visited = {};
    let stack = []
    let recStack = {}; 

   
    function dfs(graph, visited, i) {
        visited[i] = true;
        recStack[i] = true

        for (let ne of graph[i]) {
            if (!visited[ne]) {
                if (dfs(graph, visited, ne, recStack) === null) {
                    return null;
                }
            } else if (recStack[ne]) {
                return null;
            }
        }
        delete recStack[i];
        stack.push(i);
    }
    for (let i = 0; i < numCourses; i++) {
        if (!visited[i]) {
            if (!visited[i]) {
                if (dfs(adj, visited, i, recStack) === null) {
                    return []
                }
            }
        }
    }
    
   return stack.reverse()
};