//Gap Buffer or Two Stack approach
var TextEditor = function () {
    this.beforeCursor = []
    this.afterCursor = []

};

/** 
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function (text) {
    for (let char of text) {
        this.beforeCursor.push(char)
    }

};

/** 
 * @param {number} k
 * @return {number}
 */
TextEditor.prototype.deleteText = function (k) {
    let howManyDelete = Math.min(k, this.beforeCursor.length)
    for (let i = 0; i < howManyDelete; i++) {
        this.beforeCursor.pop()
    }
    return howManyDelete
};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorLeft = function (k) {
    let moved = Math.min(k , this.beforeCursor.length) 
    for(let i = 0 ; i < moved ; i++) {
        this.afterCursor.push(this.beforeCursor.pop())
    }
    return this._getLast10()

};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorRight = function (k) {
    let moved = Math.min(k , this.afterCursor.length) 
    for(let i = 0 ; i < moved ; i++) {
        this.beforeCursor.push(this.afterCursor.pop())
    }
    return this._getLast10()
};

TextEditor.prototype._getLast10 = function() {
    // Return last min(10, len) characters before cursor
    const count = Math.min(10, this.beforeCursor.length);
    return this.beforeCursor.slice(this.beforeCursor.length - count).join('');
}

/** 
 * Your TextEditor object will be instantiated and called as such:
 * var obj = new TextEditor()
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */