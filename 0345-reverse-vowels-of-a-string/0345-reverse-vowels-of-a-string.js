/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {

    let sArr = s.split("")
    let vowels = new Set([...['a', 'e', 'i', 'o', 'u']])

    let left = 0, right = sArr.length - 1

    while (left < right) {

        while (left < right && !vowels.has(sArr[left].toLowerCase())) {
            left++
        }

        while (left < right && !vowels.has(sArr[right].toLowerCase())) {
            right--
        }


        if (vowels.has(sArr[left].toLowerCase()) && vowels.has(sArr[right].toLowerCase())) {
            swap(sArr, left, right)
            left++
            right--
        }

    }
    return sArr.join("")
};
function swap(word, i, j) {
    let temp = word[i]
    word[i] = word[j]
    word[j] = temp
}
