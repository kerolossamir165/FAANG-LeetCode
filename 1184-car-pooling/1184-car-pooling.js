    /**
    * @param {number[][]} trips
    * @param {number} capacity
    * @return {boolean}
    */
    class Minheap {
        constructor() {
            this.pq = [null]; // 1-based indexing
            this.N = 0;
        }

        isEmpty() {
            return this.N === 0;
        }

        insert(x) {
            this.pq[++this.N] = x;
            this.swim(this.N);
        }

        delMin() {
            if (this.isEmpty()) return null;

            const min = this.pq[1];
            this.swap(1, this.N--);
            this.sink(1);
            this.pq[this.N + 1] = null;
            return min;
        }

        swim(k) {
            while (k > 1 && this.pq[Math.floor(k / 2)][1] > this.pq[k][1]) {
                this.swap(k, Math.floor(k / 2));
                k = Math.floor(k / 2);
            }
        }

        sink(k) {
            while (2 * k <= this.N) {
                let j = 2 * k;
                if (j < this.N && this.pq[j][1] > this.pq[j + 1][1]) j++;
                if (this.pq[k][1] <= this.pq[j][1]) break;
                this.swap(k, j);
                k = j;
            }
        }

        swap(i, j) {
            [this.pq[i], this.pq[j]] = [this.pq[j], this.pq[i]];
        }

        peek() {
            return this.pq[1];
        }


    }


    var carPooling = function(trips, capacity) {
        trips.sort(([a, b,c], [d, e, f]) => b - e)
        let heap = new Minheap()
        let currentTripPassenger = 0

        for(let trip of trips) {
            let [passengerCount , from , to] = trip 

            while(!heap.isEmpty() && heap.peek()[1] <= from ) {
                let [dropedPassengerCount , to ] = heap.delMin()
                currentTripPassenger -= dropedPassengerCount
            }

            currentTripPassenger += passengerCount 

            if(currentTripPassenger > capacity) return false 

            heap.insert([passengerCount, to])
        }
        return true
    };