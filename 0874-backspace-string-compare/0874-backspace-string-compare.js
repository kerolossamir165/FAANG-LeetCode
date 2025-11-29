/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let i = s.length - 1, j = t.length - 1
    let counterS = 0
    let counterT = 0


    while(i >= 0 || j >= 0) {
        while(i >= 0) {
            if(s[i] === "#") {
                i--
                counterS++
            } else if (counterS > 0) {
                i--
                counterS--
            } else {
                break
            }
        }
        while(j >= 0) {
            if(t[j] === "#") {
                j--
                counterT++
            } else if (counterT > 0) {
                j--
                counterT--
            }else {
                break
            }
        }

   
       if (i >= 0 && j >= 0) {
           if(s[i] !== t[j]){
                return false 
            } else {
                i--
                j--
            }
       } else {
            if(i >= 0  || j >= 0) {
                return false
            } else {
                return true 
            }
       }
       
    }
    return true 
    
};