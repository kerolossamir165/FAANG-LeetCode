/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    let result = []
    let path = [0]

    function dfs(node) {
        if (node === graph.length - 1) {
            result.push([...path])
            return
        }

        for (let next of graph[node]) {
            path.push(next)
            dfs(next)
            path.pop()
        }

    }

    dfs(0)


    return result

};