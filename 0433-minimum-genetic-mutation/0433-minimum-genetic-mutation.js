/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    let bankSet = new Set(bank)

    if(!bankSet.has(endGene)) return -1
    let queue = [[startGene, 0]]
    let visited = new Set([startGene])

    let chars = ['A', 'C', 'G', 'T'];

    while(queue.length) {
        let [current , mutation] = queue.shift()

        if(current === endGene) return mutation

        for(let i = 0 ; i < current.length ; i++) {
            let currentChar = current[i]

            for(let char of chars) {
                if(currentChar === char) continue 


                const newGene = current.slice(0, i) + char + current.slice(i + 1);

                if(bankSet.has(newGene) && !visited.has(newGene))
                {
                    visited.add(newGene); 
                    queue.push([newGene, mutation + 1]);
                }
            }
        }
    }
    return -1 

    
};