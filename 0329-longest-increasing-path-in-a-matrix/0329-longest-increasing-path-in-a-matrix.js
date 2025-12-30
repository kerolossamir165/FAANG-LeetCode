/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    if (!matrix || matrix.length === 0) 
    { 
        return 0;
    }
    const m = matrix.length; const n = matrix[0].length;
     // Initialize memo table with zeros
    const memo = Array.from({ length: m }, () => Array(n).fill(0));
    let res = 0; 
    for (let r = 0; r < m; r++)
    {
        for (let c = 0; c < n; c++) 
        { 
            res = Math.max(res, dfs(r, c, matrix, memo));
        } 
    }
    return res;
};

function dfs(r, c, matrix, memo) {
  // If already computed, return cached value
  if (memo[r][c] !== 0) {
    return memo[r][c];
  }

  let maxPath = 1; // minimum path length is 1 (the cell itself)
  const dirs = [
    [-1, 0], // up
    [1, 0],  // down
    [0, -1], // left
    [0, 1]   // right
  ];

  for (const [dr, dc] of dirs) {
    const nextR = r + dr;
    const nextC = c + dc;

    if (
      nextR >= 0 && nextR < matrix.length &&
      nextC >= 0 && nextC < matrix[0].length &&
      matrix[nextR][nextC] > matrix[r][c]
    ) {
      maxPath = Math.max(maxPath, 1 + dfs(nextR, nextC, matrix, memo));
    }
  }

  memo[r][c] = maxPath;
  return maxPath;
}
