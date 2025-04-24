/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0 
    let right = height.length - 1 
    let sizeWater = 0 

    while(left < right) {
        let water = Math.min(height[left] , height[right] ) * (right - left )
        sizeWater = Math.max(sizeWater , water)

        if(height[left] < height[right]) {
            left++
        } else if (height[left] > height[right]) {
            right--
        } else {
            right--
            left++
        }
    }
    return sizeWater
    
};