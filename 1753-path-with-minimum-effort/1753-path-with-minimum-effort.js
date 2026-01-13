/**
 * @param {number[][]} heights
 * @return {number}
 */

// MinHeap implementation (generic, reusable)
class MinPHeap {
  constructor() {
    this.heap = [];
  }
  push(node) {
    this.heap.push(node);
    this.bubbleUp();
  }
  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return top;
  }
  bubbleUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.heap[parent][0] <= this.heap[idx][0]) break;
      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }
  bubbleDown() {
    let idx = 0;
    const length = this.heap.length;
    while (true) {
      let left = 2 * idx + 1, right = 2 * idx + 2, smallest = idx;
      if (left < length && this.heap[left][0] < this.heap[smallest][0]) smallest = left;
      if (right < length && this.heap[right][0] < this.heap[smallest][0]) smallest = right;
      if (smallest === idx) break;
      [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
      idx = smallest;
    }
  }
}

// Main function using the heap
/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
  const m = heights.length, n = heights[0].length;
  const efforts = Array.from({ length: m }, () => Array(n).fill(Infinity));
  efforts[0][0] = 0;

  const directions = [[1,0],[-1,0],[0,1],[0,-1]];
  const pq = new MinPHeap();
  pq.push([0, 0, 0]); // [effort, row, col]

  while (pq.heap.length) {
    const [effort, r, c] = pq.pop();

    if (r === m - 1 && c === n - 1) return effort;

    for (let [dr, dc] of directions) {
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nr < m && nc >= 0 && nc < n) {
        const nextEffort = Math.max(effort, Math.abs(heights[r][c] - heights[nr][nc]));
        if (nextEffort < efforts[nr][nc]) {
          efforts[nr][nc] = nextEffort;
          pq.push([nextEffort, nr, nc]);
        }
      }
    }
  }
  return -1; // should never reach here
};

