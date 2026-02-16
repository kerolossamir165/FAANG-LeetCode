/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let left = Math.max(...weights)
    let right = weights.reduce((a, b) => a + b, 0);

    while(left < right) {
        let mid = Math.floor((left+ right) / 2)
        if(canShip(weights , mid , days)) {
            /**
            With capacity = mid, you can ship everything within the required days.
            But maybe you can do it with an even smaller capacity.
            So you shrink the search space: right = mid.
             */
            right = mid 
        } else {
            /**
            Capacity = mid is too small.
            You need a larger capacity.
            So you move the lower bound up: left = mid + 1.
             */
            left = mid + 1
        }
    }
    
    return left
};

function canShip(weights , capacity, days) {
    let daysCount = 1 
    let load = 0 

    for(let w of weights) {
        if(load + w > capacity) {
            daysCount++
            load = w
        } else {
            load += w 
        }
    }
    return daysCount <= days
}