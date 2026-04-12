/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

  const count = {};

  // Count characters in s
  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  // Subtract counts using t
  for (let char of t) {
    if (!count[char]) {
      return false;
    }
    count[char]--;
  }
  return true
};