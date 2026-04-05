/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    if (n === 0) return [];

    function buildTrees(start, end) {
        let trees = [];
        if (start > end) {
            trees.push(null);
            return trees;
        }

     
        for (let i = start; i <= end; i++) {
            // all possible left subtrees if i is chosen as root
            let leftTrees = buildTrees(start, i - 1);

            // all possible right subtrees if i is chosen as root
            let rightTrees = buildTrees(i + 1, end);

            // connect left and right trees to root i
            for (let left of leftTrees) {
                for (let right of rightTrees) {
                    let currentTree = new TreeNode(i);
                    currentTree.left = left;
                    currentTree.right = right;
                    trees.push(currentTree);
                }
            }
        }
        return trees;
    }

    return buildTrees(1, n);
};