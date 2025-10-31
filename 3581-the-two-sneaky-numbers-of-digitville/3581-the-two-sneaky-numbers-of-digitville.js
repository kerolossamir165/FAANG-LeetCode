/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let map = {}
    let  sneaky_numbers = []
    for(let i of nums ) {
        if(map[i]) {
            sneaky_numbers.push(i)
        } else {
            map[i] = true
        }
    }
    return  sneaky_numbers
};