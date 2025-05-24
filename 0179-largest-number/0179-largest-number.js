/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let str = nums.map(String)

    str.sort((a,b) => {
        let ab = a + b
        let ba = b + a 

        return ba.localeCompare(ab)
    })
    if(str[0] === "0") return "0"
    return str.join("")
};