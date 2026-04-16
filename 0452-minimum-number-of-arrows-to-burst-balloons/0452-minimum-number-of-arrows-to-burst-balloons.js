/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    if (points.length === 0) return 0;

    // Sort balloons by their end coordinate
    points.sort((a, b) => a[1] - b[1]);

    // Greedy approach
    let arrows = 1;
    // first arrow at the end of the first balloon
    let end = points[0][1]; 

    for (let i = 1; i < points.length; i++) {
        // If the current balloon starts after the last arrow position,
        // we need a new arrow
        if (points[i][0] > end) {
            arrows++;
            end = points[i][1];
        }
    }

    return arrows;
};