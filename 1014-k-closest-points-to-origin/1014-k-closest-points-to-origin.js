/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    return points
        .sort((a, b) => (a[0]*a[0] + a[1]*a[1]) - (b[0]*b[0] + b[1]*b[1]))
        .slice(0, k);
};

// var kClosest = function(points, k) {
//      function dist(p) { return p[0]*p[0] + p[1]*p[1]; }

//     function partition(left, right) {
//         const pivotDist = dist(points[right]);
//         let storeIdx = left;

//         for (let i = left; i < right; i++) {
//             if (dist(points[i]) <= pivotDist) {
//                 [points[storeIdx], points[i]] = [points[i], points[storeIdx]];
//                 storeIdx++;
//             }
//         }
//         [points[storeIdx], points[right]] = [points[right], points[storeIdx]];
//         return storeIdx;
//     }

//     let left = 0, right = points.length - 1;
//     while (left <= right) {
//         const pivotIdx = partition(left, right);
//         if (pivotIdx === k) break;           // First k elements are the closest
//         else if (pivotIdx < k) left = pivotIdx + 1;
//         else right = pivotIdx - 1;
//     }

//     return points.slice(0, k);
// }