/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
   let colors = Array(graph.length).fill(-1)

   for(let i = 0 ; i < graph.length; i++) {
        if(colors[i] === -1) {
            let stack = [i]
            colors[i] = 0

            while(stack.length > 0) {
                let node = stack.pop()
               for(let el of graph[node]){
                    if(colors[el] === -1) {
                        colors[el] = 1 - colors[node]
                        stack.push(el)
                    }else if(colors[el] === colors[node]){
                        return false
                    }
                }
            }
        }
   }
   return true

};