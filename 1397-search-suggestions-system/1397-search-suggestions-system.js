/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */

/**
function suggestedProducts(products: string[], searchWord: string): string[][] {
  products.sort()
  let resultSearch:string[][]= []
  let word:string = ''
    for(let i = 0 ; i < searchWord.length ; i++ ) {
      word += searchWord[i]
      let searchArr:string[] = []

      for(let product of products) {
        if(product.indexOf(word) === 0) {
          searchArr.push(product)
          if(searchArr.length === 3) {
            break
          }
        }
      }
      resultSearch.push(searchArr)
    }
    return resultSearch
};
 */
var suggestedProducts = function(products, searchWord) {
    products.sort()
    let word = ""
    let result = []
    for(let i = 0 ; i < searchWord.length ; i++) {
        word += searchWord[i]
        let search = []
        let left = 0 , right = products.length - 1
        while(left <= right) {
            let mid = Math.floor((left + right) / 2);
            if(products[mid] < word) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        for(let j = left ; j < products.length && search.length < 3 ; j++) {
            if(products[j].startsWith(word)) {
                search.push(products[j])
            } else {
                break
            }
        }
        result.push(search)
    }  

    return result  
};