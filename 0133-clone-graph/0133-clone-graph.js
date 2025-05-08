/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(!node) {
        return null
    }
    return dfs(node)
};

function dfs(node, map = {}) {
    if(map[node.val]) {
        return map[node.val]
    }

    let clonedNode = new _Node(node.val)
    map[node.val] = clonedNode
    for(let neighbor of node.neighbors) {
        let clonedNeighbour = dfs(neighbor , map)
        clonedNode.neighbors.push(clonedNeighbour)
    }
    return clonedNode
}

