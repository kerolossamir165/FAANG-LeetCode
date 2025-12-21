class TrieNode {
    constructor() {
        this.children = {};   
        this.isWord = false;
    }
}

var WordDictionary = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.root;

    for (let char of word) {
        if (!(char in node.children)) {  
            node.children[char] = new TrieNode();
        }
        node = node.children[char];
    }
    node.isWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return this.search_helper(0, word, this.root);
};


/**
Search for c.t 

[LOG] Index 1 → char = "."
[LOG] Wildcard found → try ALL children of node "c"
[LOG] Children of "c": ["a", "o", "u", "i"]

[LOG] Enter branch "a"
[LOG] Index 2 → char = "t"
[LOG] Node "a" has child "t" → move into node "t"
[LOG] End of word reached → node.isWord = true
[RESULT] Match found: "cat"

[LOG] Enter branch "o"
[LOG] Index 2 → char = "t"
[LOG] Node "o" has child "t" → move into node "t"
[LOG] End of word reached → node.isWord = true
[RESULT] Match found: "cot"


[LOG] Enter branch "i"
[LOG] Index 2 → char = "t"
[LOG] Node "i" has child "t" → move into node "t"
[LOG] End of word reached → node.isWord = false (needs "y")
[RESULT] No match here


(root)
 └── "c"
      ├── "a"
      │    └── "t"   (isWord = true → "cat")
      ├── "o"
      │    ├── "t"   (isWord = true → "cot")
      │    └── "l"
      │         └── "o"
      │              └── "r"
      │                   └── (isWord = true → "color")
      └── "i"
           └── "t"
                └── "y" (isWord = true → "city")
 */
WordDictionary.prototype.search_helper = function(index, word, node) {
    for (let i = index; i < word.length; i++) {
        let c = word[i];   

        if (c === ".") {
            for (let child in node.children) {
                if (this.search_helper(i + 1, word, node.children[child])) {  
                    return true;
                }
            }
            return false;
        } else if (c in node.children) {
            node = node.children[c];
        } else {
            return false;
        }
    }
    return node.isWord;
};


/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */