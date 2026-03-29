class TrieNode {
    constructor() {
        this.children = new Map();
        this.prefixSum = 0;
    }
}
var MapSum = function () {
    this.root = new TrieNode();
    this.keyVals = new Map();
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
    const diff = val - (this.keyVals.get(key) || 0);
    this.keyVals.set(key, val);

    let node = this.root;
    for (const ch of key) {
        if (!node.children.has(ch)) {
            node.children.set(ch, new TrieNode());
        }
        node = node.children.get(ch);
        node.prefixSum += diff;    // Update prefix sum along the path
    }
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
    let node = this.root;
    for (const ch of prefix) {
        if (!node.children.has(ch)) return 0;
        node = node.children.get(ch);
    }
    return node.prefixSum
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */