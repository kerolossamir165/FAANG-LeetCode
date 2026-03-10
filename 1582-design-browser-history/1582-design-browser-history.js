/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.history = [homepage]
    this.current = 0 
    this.end = 0 
    
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.current++
    if(this.current < this.history.length) {
        this.history[this.current] = url
    } else {
        this.history.push(url)
    }
    this.end = this.current
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    this.current = Math.max(0 , this.current - steps)
    return this.history[this.current]
    
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    this.current = Math.min(this.end, this.current + steps)
    return this.history[this.current]
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

 /**class BrowserHistoryStacks {
    constructor(homepage) {
        this.backStack = [];        // Pages we can go back to
        this.forwardStack = [];     // Pages we can go forward to
        this.current = homepage;
    }

    visit(url) {
        this.backStack.push(this.current);
        this.current = url;
        this.forwardStack = [];     // Clear forward history
    }

    back(steps) {
        while (steps > 0 && this.backStack.length > 0) {
            this.forwardStack.push(this.current);
            this.current = this.backStack.pop();
            steps--;
        }
        return this.current;        // O(steps)
    }

    forward(steps) {
        while (steps > 0 && this.forwardStack.length > 0) {
            this.backStack.push(this.current);
            this.current = this.forwardStack.pop();
            steps--;
        }
        return this.current;        // O(steps)
    }
} */