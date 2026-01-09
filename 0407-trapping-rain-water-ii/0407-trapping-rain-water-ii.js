/**
 * @param {number[][]} heightMap
 * @return {number}
 */
class MinPQ{
    constructor() {
        this.heap = [];
    }

    push(item) {
        this.heap.push(item);
        this._swim();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._sink();
        return top;
    }

    _swim() {
        let i = this.heap.length - 1;
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (this.heap[p][0] <= this.heap[i][0]) break;
            [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
            i = p;
        }
    }

    _sink() {
        let i = 0;
        const n = this.heap.length;
        while (true) {
            let l = 2 * i + 1, r = 2 * i + 2, smallest = i;

            if (l < n && this.heap[l][0] < this.heap[smallest][0]) smallest = l;
            if (r < n && this.heap[r][0] < this.heap[smallest][0]) smallest = r;

            if (smallest === i) break;
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}
var trapRainWater = function(heightMap) {
     let m = heightMap.length, n = heightMap[0].length;
    if (m <= 2 || n <= 2) return 0;

    let visited = Array.from({length: m}, () => Array(n).fill(false));
    let pq = new MinPQ();

    // Step 1: push all boundary cells into heap
    for (let i = 0; i < m; i++) {
        for (let j of [0, n-1]) {
            pq.push([heightMap[i][j], i, j]);
            visited[i][j] = true;
        }
    }
    for (let j = 0; j < n; j++) {
        for (let i of [0, m-1]) {
            if (!visited[i][j]) {
                pq.push([heightMap[i][j], i, j]);
                visited[i][j] = true;
            }
        }
    }

    let trapped = 0;
    let dirs = [[1,0],[-1,0],[0,1],[0,-1]];

    // Step 2: process heap
    while (!pq.isEmpty()) {
        let [h, x, y] = pq.pop();

        for (let [dx, dy] of dirs) {
            let nx = x + dx, ny = y + dy;
            if (nx < 0 || ny < 0 || nx >= m || ny >= n || visited[nx][ny]) continue;

            visited[nx][ny] = true;

            // If neighbor lower, water trapped
            trapped += Math.max(0, h - heightMap[nx][ny]);

            // Update boundary height
            pq.push([Math.max(heightMap[nx][ny], h), nx, ny]);
        }
    }

    return trapped;
};

