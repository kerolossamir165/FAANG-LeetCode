
var MyCalendarThree = function() {
    this.overlap = 0 ;
    this.max = 0 
    this.interval = []
    
};

/** 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {number}
 */
MyCalendarThree.prototype.book = function(startTime, endTime) {

    this.interval.push([startTime, 'S']); 
    this.interval.push([endTime, 'E']);   

    this.interval.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        return 0;
    });

    for(let [time , type ] of this.interval) {
        if(type === "S") {
            this.overlap++
        }else {
            this.overlap--
        }
        this.max = Math.max(this.max , this.overlap)
    }
    return this.max
    
};

/** 
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(startTime,endTime)
 */