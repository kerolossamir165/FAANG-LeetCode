/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let left = 0, right = 0, n = fruits.length
    let max = 0
    let basket = new Map()

    while (right < n) {
        basket.set(fruits[right], basket.get(fruits[right]) + 1 || 1)
 
        while (basket.size > 2) {
            basket.set(fruits[left], basket.get(fruits[left]) - 1)
            if (basket.get(fruits[left]) === 0) {
                basket.delete(fruits[left])
            }
            left++
        }

        max = Math.max(max, right - left + 1)
        right++
    }
    return max
    
}; 