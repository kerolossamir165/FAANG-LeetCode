/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} hBars
 * @param {number[]} vBars
 * @return {number}
 */
var maximizeSquareHoleArea = function(n, m, hBars, vBars) {
    hBars.sort((a, b) => a - b);
    vBars.sort((a, b) => a - b);
    let hMax = 1 , vMax = 1 , hCur = 1 , vCur = 1 

    for (let i = 1; i < hBars.length; i++) {
        if(hBars[i] === hBars[i - 1] + 1) {
            hCur++
        } else {
            hCur = 1
        }
        hMax = Math.max(hCur, hMax)
    }  

    for (let i = 1; i < vBars.length; i++) {
        if(vBars[i] === vBars[i - 1] + 1) {
            vCur++
        } else {
            vCur = 1
        }
        vMax = Math.max(vCur , vMax)
    } 

    let side = Math.min(vMax, hMax) + 1
    return side * side  
};
