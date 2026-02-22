/**
 * @param {number} capacity
 */

class Node {
     constructor(key, value) { 
        this.key = key;
        this.value = value; 
        this.freq = 1; 
        this.prev = null; 
        this.next = null; 
    } 
} 

class DBLinkedList {
    constructor() {
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }
    add(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
        this.size++;
    }
    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.size--;
    }
    removeLast() {
        if (this.size > 0) {
            const node = this.tail.prev;
            this.remove(node);
            return node;
        }
        return null;
    }
}
var LFUCache = function(capacity) {
    this.capacity = capacity; 
    this.map = new Map(); 
    this.freqMap = new Map(); 
    this.minFreq = 0
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key);
    this.updateFreq(node);
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if (this.capacity === 0) return;
    if (this.map.has(key)) {
        const node = this.map.get(key);
        node.value = value;
        this.updateFreq(node);
    } else {
        if (this.map.size >= this.capacity) {
            const list = this.freqMap.get(this.minFreq);
            const toRemove = list.removeLast();
            this.map.delete(toRemove.key);
        }
        const newNode = new Node(key, value);
        this.map.set(key, newNode);
        if (!this.freqMap.has(1)) this.freqMap.set(1, new DBLinkedList());
        this.freqMap.get(1).add(newNode);
        this.minFreq = 1;
    }
};

LFUCache.prototype.updateFreq = function(node) {
    const oldFreq = node.freq;
    const list = this.freqMap.get(oldFreq);
    list.remove(node);
    if (oldFreq === this.minFreq && list.size === 0) {
        this.minFreq++;
    }
    node.freq++;
    if (!this.freqMap.has(node.freq)) {
        this.freqMap.set(node.freq, new DBLinkedList());
    }
    this.freqMap.get(node.freq).add(node);
}

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */