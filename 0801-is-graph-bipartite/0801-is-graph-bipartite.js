/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
   let colors = Array(graph.length).fill(-1)

   for(let i = 0 ; i < graph.length; i++) {
        if(colors[i] === -1) {
            let queue = [i]
            colors[i] = 0

            while(queue.length > 0) {
                let node = queue.shift()
               for(let el of graph[node]){
                    if(colors[el] === -1) {
                        colors[el] = 1 - colors[node]
                        queue.push(el)
                    }else if(colors[el] === colors[node]){
                        return false
                    }
                }
            }
        }
   }
   return true

};