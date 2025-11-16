class CustomStack {
  constructor() {
    this.stack = [];
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  size() {
    return this.stack.length;
  }
  push(item) {
    this.stack.push(item);
  }
  pop() {
    return this.isEmpty() ? null : this.stack.pop();
  }
  peek() {
    return this.isEmpty() ? null : this.stack[this.stack.length - 1];
  }
}
var MinStack = function() {
    this.stack = new CustomStack()
    this.minStack = new CustomStack()
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    //we push object with count to avoid duplicates values 
    // so we count them in the minStack 
    if(this.minStack.isEmpty() || val <= this.minStack.peek().val) {
        this.minStack.push({val , count: 1})
    } else if (val === this.minStack.peek().val) {
        this.minStack.peek().count++
    }
    this.stack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.isEmpty()) return null;

    let removed = this.stack.pop()
    let peek = this.minStack.peek()

    // we check if the value exist in the minStack 
    // and make sure we remove the minvalue from the main stack and the minStack 
    if(removed === peek.val) {
        // we reduce the count if this exist multiple times 
        peek.count--
        // if exist one time we just pop it 
        if(peek.count === 0) {
         this.minStack.pop()
        }
    }
    return removed 
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.peek()
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
   let min = this.minStack.peek() 
   return min ? min.val : null
};

/** 
 * Your MinStack objec-t will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */