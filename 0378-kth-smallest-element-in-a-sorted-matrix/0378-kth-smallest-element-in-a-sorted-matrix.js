/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

// Rows are sorted left → right.
// Columns are sorted top → bottom.

var kthSmallest = function(matrix, k) {
    let n = matrix.length - 1
    let lowVal = matrix[0][0]
    let highVal = matrix[n][n]

    while(lowVal < highVal) {
        let mid = Math.floor((lowVal + highVal) / 2) 

        //How many elements in the matrix are ≤ mid?
        let count = getHowManyLessEqual(matrix , mid)

        //kth smallest must be larger → move low = mid + 1
        if(count < k ) {
            lowVal = mid + 1
        } else {
            //If count ≥ k → kth smallest is ≤ mid → move high = mid
            highVal = mid 
        }
    }
    return lowVal
};

function getHowManyLessEqual(matrix , mid) {
    /**
        Bottom row = larger values (since columns are sorted).
        Leftmost column = smaller values (since rows are sorted).
        From this corner, you can always move up to get smaller or right to get larger 
        no backtracking needed.
    
     */
    let n = matrix.length 
    let row = n - 1 
    let col = 0 
    let count = 0 

    while(row >= 0 && col < n) {
        if(matrix[row][col] <= mid) {
        // if true .. Then everything above in that column is also ≤ mid.

            // move the row right 
            count += (row + 1)
            col++
        }else {
            //Then everything below is also > mid.
            // then move up to find smaller values.
            row--
        }
    }
    return count
}