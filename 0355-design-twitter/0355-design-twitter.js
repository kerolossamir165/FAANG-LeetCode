class MaxHp {
    constructor() {
        this.data = [];
    }

    size() { return this.data.length; }

    push(item) {
        this.data.push(item);
        this._bubbleUp(this.data.length - 1);
    }

    pop() {
        const max = this.data[0];
        const last = this.data.pop();
        if (this.data.length > 0) {
            this.data[0] = last;
            this._sinkDown(0);
        }
        return max;
    }

    // Compare by item[0] (timestamp) — DESCENDING (max at top)
    _bubbleUp(i) {
        while (i > 0) {
            const parent = (i - 1) >> 1;
            if (this.data[parent][0] >= this.data[i][0]) break;
            [this.data[parent], this.data[i]] = [this.data[i], this.data[parent]];
            i = parent;
        }
    }

    _sinkDown(i) {
        const n = this.data.length;
        while (true) {
            let largest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;
            if (left < n && this.data[left][0] > this.data[largest][0]) largest = left;
            if (right < n && this.data[right][0] > this.data[largest][0]) largest = right;
            if (largest === i) break;
            [this.data[largest], this.data[i]] = [this.data[i], this.data[largest]];
            i = largest;
        }
    }
}
var Twitter = function () {
    this.time = 0
    // userId → [[time, tweetId], ...]
    this.tweets = new Map()
    // userId → Set of followeeIds
    this.following = new Map()
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    if (!this.tweets.has(userId)) this.tweets.set(userId, [])
    this.tweets.get(userId).push([this.time++, tweetId])
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    let users = new Set([userId])

    if (this.following.has(userId)) {
        for (let followee of this.following.get(userId)) {
            users.add(followee)
        }
    }
    let heap = new MaxHp()
    for (let user of users) {
        let tweet = this.tweets.get(user)
        if (tweet && tweet.length > 0) {
            let lastTweet = tweet.length - 1
            heap.push([
                tweet[lastTweet][0],
                tweet[lastTweet][1],
                user, lastTweet]
            )
        }
    }
    let result = []
    while (heap.size() > 0 && result.length < 10) {
        let [tweetTime, tweetId, userId, lastTweet] = heap.pop();

        result.push(tweetId)
        if(lastTweet > 0) {
            const tweet = this.tweets.get(userId);
            heap.push([
                tweet[lastTweet - 1][0],
                tweet[lastTweet - 1][1],
                userId, lastTweet - 1]
            )

        }
    }
    return result
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {

    if (!this.following.has(followerId)) this.following.set(followerId, new Set());
    this.following.get(followerId).add(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    if (this.following.has(followerId)) {
        this.following.get(followerId).delete(followeeId);  // O(1)
    }
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */