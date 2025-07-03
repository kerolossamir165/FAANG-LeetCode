/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let n = arr.length 
    let zeros = 0

    for(let i = 0 ; i + zeros < n ; i++ ) {
        if(arr[i] === 0 ) {
            //This zero can't be duplicated. We have no more space,
            // as left is pointing to the last element which could be included      
            if (i + zeros === n - 1 ) {
                arr[n - 1] = 0 
                n -= 1 
                break
            }
            zeros++
        }
    }
    let i = n - 1 - zeros
    let j = n - 1
    while(i >= 0 ) {
        if(arr[i] === 0) {
            arr[j] = 0
            j-- 
            arr[j] = 0
        } else {
            arr[j] = arr[i]
        }
        i--
        j--
    }
    return arr 
}



