/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
   
    this.stack = []
    this.root = root
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    
    while(this.root) {
        this.stack.push(this.root)
        this.root = this.root.left
    }
    let value = this.stack.pop()
    this.root = value.right
    return value.val
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0 || this.root !== null
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */