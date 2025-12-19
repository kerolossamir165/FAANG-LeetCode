/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function(n, meetings, firstPerson) {
      meetings.sort((a, b) => a[2] - b[2]);

        const sameTimeMeetings = new Map();
        for (let [x, y, t] of meetings) {
            if (!sameTimeMeetings.has(t)) {
                sameTimeMeetings.set(t, []);
            }
            sameTimeMeetings.get(t).push([x, y]);
        }

        const graph = new UnionFind(n);
        graph.unite(firstPerson, 0);

        for (let [t, pairs] of sameTimeMeetings.entries()) {
            for (let [x, y] of pairs) {
                graph.unite(x, y);
            }

            for (let [x, y] of pairs) {
                if (!graph.connected(x, 0)) {
                    graph.reset(x);
                    graph.reset(y);
                }
            }
        }

        const result = [];
        for (let i = 0; i < n; i++) {
            if (graph.connected(i, 0)) {
                result.push(i);
            }
        }
        return result;
};



class UnionFind {
    constructor(nodes) {
        this.parent = Array.from({ length: nodes }, (_, i) => i);
        this.rank = Array(nodes).fill(0);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }

    unite(x, y) {
        let px = this.find(x);
        let py = this.find(y);
        if (px !== py) {
            if (this.rank[px] > this.rank[py]) {
                this.parent[py] = px;
            } else if (this.rank[px] < this.rank[py]) {
                this.parent[px] = py;
            } else {
                this.parent[py] = px;
                this.rank[px] += 1;
            }
        }
    }

    connected(x, y) {
        return this.find(x) === this.find(y);
    }

    reset(x) {
        this.parent[x] = x;
        this.rank[x] = 0;
    }
}