/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
 /**
 To solve this problem, we need to traverse the binary tree and find all nodes that are k edges away from a given target node. We can achieve this by using a two-step approach. First, we need to convert the tree into a graph structure so that we can easily navigate through the nodes, regardless of their direction (parent or child). This graph will allow us to perform a breadth-first search (BFS) starting from the target node to find all nodes that are exactly k edges away. The BFS approach ensures that we efficiently explore all possible paths to the nodes at the desired distance, making it an effective solution for this problem.
 
  */
var distanceK = function (root, target, k) {
    let parentMap = new Map();
    buildingGraph(root, null, parentMap)
    let result = []
    let queue = [target]
    let visited = new Set()
    visited.add(target)
    let distance = 0

    while (queue.length) {

        if (distance === k) {
            for (let node of queue) {
                result.push(node.val)
            }
            return result
        }
        let level = queue.length
        for (let i = 0; i < level; i++) {
            let node = queue.shift()

            if (node.left && !visited.has(node.left)) {
                queue.push(node.left)
                visited.add(node.left)
            }
            if (node.right && !visited.has(node.right)) {
                queue.push(node.right)
                visited.add(node.right)
            }
            let parent = parentMap.get(node)
            if(parent !== null && !visited.has(parent)) {
                queue.push(parent)
                visited.add(parent)
            }
        }
            distance++
    }
    return result


};

function buildingGraph(node, parent, map) {
    if (node === null) return null
    map.set(node, parent)
    buildingGraph(node.left, node, map)
    buildingGraph(node.right, node, map)

}