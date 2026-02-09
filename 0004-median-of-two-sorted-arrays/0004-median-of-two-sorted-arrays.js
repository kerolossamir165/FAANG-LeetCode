/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {

    if(nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1)
    }
    let m = nums1.length 
    let n = nums2.length 
    let total = Math.floor((m + n + 1) / 2)

    let low = 0 
    let heigh = m 

    while(low <= heigh ) {
        let partitionX = Math.floor((low + heigh ) / 2)
        let partitionY = total - partitionX 

        let maxLeftnum1 = partitionX === 0 ? -Infinity : nums1[partitionX - 1]
        let minRightnum1 = partitionX === m ? Infinity : nums1[partitionX]
        let maxLeftnum2 = partitionY === 0 ? -Infinity : nums2[partitionY - 1]
        let minRightnum2 = partitionY === n ? Infinity : nums2[partitionY]


        if(maxLeftnum1 <= minRightnum2 && maxLeftnum2 <= minRightnum1) {

            if((m + n) % 2 === 1) {
                return Math.max(maxLeftnum1,maxLeftnum2 )

            } else {
                return (Math.max(maxLeftnum1,maxLeftnum2 ) + Math.min(minRightnum1,minRightnum2 )) / 2

            }
        } else if (maxLeftnum1 > minRightnum2) {
            heigh = partitionX - 1
        } else {
            low = partitionX + 1
        }

    }
   
};