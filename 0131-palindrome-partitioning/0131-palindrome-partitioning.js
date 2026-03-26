/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
        const result = [];

    function isPalindrome(str, left, right) {
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    function backtrack(start, current) {
        if (start === s.length) {
            result.push([...current]);  // Found a valid partition
            return;
        }

        for (let end = start; end < s.length; end++) {
            if (isPalindrome(s, start, end)) {
                current.push(s.slice(start, end + 1));  // Choose
                backtrack(end + 1, current);              // Explore
                current.pop();                            // Un-choose (backtrack)
            }
        }
    }

    backtrack(0, []);
    return result;
};

