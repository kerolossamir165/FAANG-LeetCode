/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let i = 0 , j = 0 
    let overlap = []
    let a , b ;
    while(i < firstList.length && j < secondList.length) {
        if(firstList[i][0] <= secondList[j][0]) {
            a = firstList[i]
            b = secondList[j]
        } else {
            a = secondList[j]
            b = firstList[i]
        }

        if(a[1] >= b[0]) {
            overlap.push([b[0] , Math.min(a[1], b[1])])
        }
        if(firstList[i][1] < secondList[j][1]) {
            i++
        } else {
            j++
        }
    }
    return overlap
    
};