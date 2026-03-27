/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
     if (n === 1) return [0];

    // Build adjacency list and track degrees
    const adj = new Array(n).fill(null).map(() => new Set());
    for (const [u, v] of edges) {
        adj[u].add(v);
        adj[v].add(u);
    }

    // Find initial leaves (degree 1)
    let leaves = [];
    for (let i = 0; i < n; i++) {
        if (adj[i].size === 1) leaves.push(i);
    }

    let remaining = n;

    // Peel leaves layer by layer
    while (remaining > 2) {
        remaining -= leaves.length;
        const newLeaves = [];

        for (const leaf of leaves) {
            // Each leaf has exactly one neighbor
            const neighbor = [...adj[leaf]][0];
            adj[neighbor].delete(leaf);

            if (adj[neighbor].size === 1) {
                newLeaves.push(neighbor);  // Became a new leaf
            }
        }

        leaves = newLeaves;
    }

    return leaves;
};