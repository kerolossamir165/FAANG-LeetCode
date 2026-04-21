/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length;
    let n = text2.length;

    // Create DP table (m+1 x n+1)
    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // SFill DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1; // match → extend subsequence
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); 
            }
        }
    }

    // Answer is in dp[m][n]
    return dp[m][n];
};