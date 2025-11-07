/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    let base = 31
    let mod = 1e9 + 7
    function computeHash(word) {
        let hash = 0
        for(let i = 0 ; i < word.length ;i++) {
            hash = (hash * base + word.charCodeAt(i)) % mod
        }
        return hash 
    }


    const rootHashes = new Map();
    for (const root of dictionary) {
        rootHashes.set(computeHash(root), root);
    }
    const words = sentence.split(" ");
    let result = []

    for(let word of words) {
        let hash = 0 
        let replaced = false 
        for (let i = 0; i < word.length; i++) {
           hash = (hash * base + word.charCodeAt(i)) % mod;
           if(rootHashes.has(hash)){
             const root = rootHashes.get(hash);
                if (word.startsWith(root)) {
                result.push(root);
                replaced = true
                break
             }
           }
           
        }
        if(!replaced) result.push(word)
    }
    return result.join(" ")

};