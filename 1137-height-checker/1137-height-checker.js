/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
        let notInPlace = 0
    let heightsPlaceHolder = [...heights]
    let expected = heightsPlaceHolder.sort((a, b) => a - b)

     
    for(let i = 0 ; i < heights.length ; i++) {        
        if (heights[i] !== expected[i]) {            
            notInPlace++
        }
    }
    
    return notInPlace 
};