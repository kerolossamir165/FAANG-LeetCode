class Stack {
    constructor() {
        this.stack = []
        this.length = 0
    }

    isEmpty() {
        return this.length === 0
    }
    push(element) {
        this.stack[this.length++] = element

    }
    pop() {
        if(this.isEmpty()) {
            return "the stack is empty"
        }
        let element = this.stack[--this.length]
        this.stack[this.length] = null  
        this.stack.length--                                                           
        return element
    }
    peek() {
        if(this.isEmpty()) {
            return "this stack is empty"
        }
        return this.stack[this.length - 1]
    }
}
var MyQueue = function() {
    this.inStack = new Stack()
    this.outStack = new Stack()
};

/** 
 * @param {number} x
 * @return {void}
 */


MyQueue.prototype.push = function(x) {
    this.inStack.push(x)

};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.outStack.isEmpty()) {
        while(!this.inStack.isEmpty()) {
            this.outStack.push(this.inStack.pop())
        }
    }
    return this.outStack.pop() 
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.outStack.isEmpty()) {
        while (!this.inStack.isEmpty()) {
            this.outStack.push(this.inStack.pop())
        }
    }
    return this.outStack.peek()
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
        return this.inStack.stack.length === 0 && this.outStack.stack.length === 0
   
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */