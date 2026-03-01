/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
    if (source === target) return 0;
    /*** 
        - Nodes: bus stops.
        - Edges: implicit, through buses. 
        From a stop you can board any bus that visits it, 
        and then reach all other stops on that bus.
    */
    const stopToBuses = new Map();

    for (let bus = 0; bus < routes.length; bus++) {
        for (const stop of routes[bus]) {
            if (!stopToBuses.has(stop)) {
                stopToBuses.set(stop, []);
            }
            stopToBuses.get(stop).push(bus);
        }
    }

    if (!stopToBuses.has(target)) return -1;
    //[current_stop, buses_taken]
    let queue = [[source , 0]]

    //Tracks bus stops you’ve already reached during BFS prevents revisiting the same stop multiple times, which would cause cycles and unnecessary work.
    const visitedStops = new Set([source]); 

    // Tracks bus routes you’ve already boarded. ensures you don’t re-use the same bus route again, which would just re-expand all its stops redundantly.
    const usedBuses = new Set();

    while(queue.length) {
        let [current_stop , buses_taken] = queue.shift() 

        for(let bus of stopToBuses.get(current_stop) || []) {
            if(usedBuses.has(bus)) continue
            usedBuses.add(bus)

            for(let next_stop of routes[bus]) {
                if(next_stop === target) {
                    return buses_taken + 1
                }

                if(!visitedStops.has(next_stop )) {
                    visitedStops.add(next_stop)
                    queue.push([next_stop , buses_taken + 1 ])
                }
            }
        }
    }
    return -1

};