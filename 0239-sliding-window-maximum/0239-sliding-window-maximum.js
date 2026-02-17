/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let res = []
    let dq = []
    let left = 0, right = 0

    while (right < nums.length) {
        while (dq.length > 0 && dq[dq.length - 1][0] <= nums[right]) {
            dq.pop()
        }

        dq.push([nums[right], right])

        if (right - left + 1 === k) {
            /**
                Remove outdated indices: If the index at the front (dq[0][1]) is less than left
                it means that element has slid out of the window.
                We must remove it before using it. Push the max: After removal, 
                the front of the deque is guaranteed to be the maximum of the current window.

                Think of the deque as a line of candidates for “window maximum”:

                New arrivals kick out weaker candidates behind them.

                The strongest candidate (largest value) stays at the front until it leaves the window.

                When it leaves, the next strongest candidate (already waiting behind) takes over instantly.
             */
            if (dq.length && dq[0][1] < left) {

                dq.shift()
            }


            /***
                When we push a new element, we remove all smaller or equal elements from the back (dq.pop() loop).
                That means the largest element seen so far in the current window will always sit at the 
                front of the deque.
                Since the deque only contains candidates that are still inside the window, 
                the front is guaranteed to be the maximum.
            */
            res.push(dq[0][0]);
            left++;
        }
        right++
    }

    return res

};
