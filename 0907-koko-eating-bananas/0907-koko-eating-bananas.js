/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let minSpeed = 1
    let maxSpeed = Math.max(...piles) 

    while(minSpeed < maxSpeed) {
        let mid = Math.floor((minSpeed + maxSpeed) / 2)

        if(speed(piles, mid , h)) {
            maxSpeed = mid 
        } else {
            minSpeed = mid + 1
        }
    }

    return minSpeed
};


function speed(piles , speed , h) {
    let hour = 0 

    for(let pile of piles) {
        hour += Math.ceil(pile / speed)
    }

    return hour <= h
} 