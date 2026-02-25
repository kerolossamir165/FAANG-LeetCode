/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let list1 = [], list2 = []

    dfs(root1 , list1)
    dfs(root2 , list2)

    return areArraysEqual(list1, list2)
    
};
function dfs(node, list) {
    if(!node ) return null 

    if(node.left === null && node.right === null) {
        list.push(node.val)
    }
    dfs(node.left , list)
    dfs(node.right , list)

}
function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((element, index) => {
    return element === arr2[index];
  });
}