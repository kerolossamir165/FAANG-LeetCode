
var RideSharingSystem = function () {
    this.riders = new Map();
    this.drivers = new Map();

};

/** 
 * @param {number} riderId
 * @return {void}
 */
RideSharingSystem.prototype.addRider = function (riderId) {
    this.riders.set(riderId, true); 
};

/** 
 * @param {number} driverId
 * @return {void}
 */
RideSharingSystem.prototype.addDriver = function (driverId) {
     this.drivers.set(driverId, true); 

};

/**
 * @return {number[]}
 */
RideSharingSystem.prototype.matchDriverWithRider = function () {
  if (this.drivers.size === 0 || this.riders.size === 0) {
           return [-1, -1];
       }

       // Get first entry from each (FIFO — insertion order)
       const driverId = this.drivers.keys().next().value;
       const riderId = this.riders.keys().next().value;

       this.drivers.delete(driverId);           // O(1)
       this.riders.delete(riderId);             // O(1)

       return [driverId, riderId];
};

/** 
 * @param {number} riderId
 * @return {void}
 */
RideSharingSystem.prototype.cancelRider = function (riderId) {
      this.riders.delete(riderId);
};

/** 
 * Your RideSharingSystem object will be instantiated and called as such:
 * var obj = new RideSharingSystem()
 * obj.addRider(riderId)
 * obj.addDriver(driverId)
 * var param_3 = obj.matchDriverWithRider()
 * obj.cancelRider(riderId)
 */

/** 
var RideSharingSystem = function () {
    this.riders = []
    this.drivers = []
    this.cancelledRiders = new Set()

};


RideSharingSystem.prototype.addRider = function (riderId) {
    if (!this.cancelledRiders.has(riderId)) {
        this.riders.push(riderId)
    }
};


RideSharingSystem.prototype.addDriver = function (driverId) {
    this.drivers.push(driverId)

};

RideSharingSystem.prototype.matchDriverWithRider = function () {

    while (this.riders.length > 0 && this.cancelledRiders.has(this.riders[0])) {
        this.cancelledRiders.delete(this.riders[0]);
        this.riders.shift();
    }

    if (this.riders.length === 0 || this.drivers.length === 0) {
        return [-1, -1];
    }

    const driverId = this.drivers.shift();
    const riderId = this.riders.shift();

    return [driverId, riderId];
};

RideSharingSystem.prototype.cancelRider = function (riderId) {
    this.cancelledRiders.add(riderId)
};
**/
