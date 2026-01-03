/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root) return "null"
    let queue = [root]
    let res = []

    while(queue.length) {
        let node = queue.shift()

        if(node) {
            res.push(node.val)
            queue.push(node.left)
            queue.push(node.right)
        } else {
            res.push("null")
        }
    }    
    return res.join(",")
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data === "null") return null 
    let arrData = data.split(",")
    let root = new TreeNode(parseInt(arrData[0]));
    let queue = [root]
    let i = 1

    while(queue.length) {
        let node = queue.shift()

        if(arrData[i] !== 'null') {
            node.left = new TreeNode(parseInt(arrData[i]));
            queue.push(node.left)
        }
        i++
        if(arrData[i] !== 'null') {
            node.right = new TreeNode(parseInt(arrData[i]));
            queue.push(node.right)
        }
        i++

    }
    
    return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */