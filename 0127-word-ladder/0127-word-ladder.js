/**
 * @param {string} beginWord
 * @param {string} endWordWord
 * @param {string[]} wordList
 * @return {number}
 */


//  single-direction BFS
// var ladderLength = function(beginWord, endWord, wordList) {
//   const dictionarySet = new Set(wordList);

//   if (!dictionarySet.has(endWord)) {
//     return 0;
//   }
//   if (beginWord === endWord) {
//     return 1;
//   }

//   const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
//   const queue = [beginWord];
//   const visited = new Set([beginWord]);
//   let dist = 0;

//   while (queue.length > 0) {
//     const levelSize = queue.length;
//     for (let i = 0; i < levelSize; i++) {
//       const currWord = queue.shift();

//       if (currWord === endWord) {
//         return dist + 1;
//       }

//       for (let j = 0; j < currWord.length; j++) {
//         for (const c of lowerCaseAlphabet) {
//           const nextWord =
//             currWord.slice(0, j) + c + currWord.slice(j + 1);

//           if (dictionarySet.has(nextWord) && !visited.has(nextWord)) {
//             visited.add(nextWord);
//             queue.push(nextWord);
//           }
//         }
//       }
//     }
//     dist++;
//   }

//   return 0;
    
// };

//bidirectional BFS
var ladderLength = function (beginWord, endWord, wordList) {
  const dictionarySet = new Set(wordList);

  // End word must exist in dictionary
  if (!dictionarySet.has(endWord)) {
    return 0;
  }

  if (beginWord === endWord) {
    return 1;
  }

  let startQueue = [beginWord];
  let startVisited = new Set([beginWord]);
  let endQueue = [endWord];
  let endVisited = new Set([endWord]);

  let levelStart = 0;
  let levelEnd = 0;

  while (startQueue.length > 0 && endQueue.length > 0) {
    // Always expand the smaller frontier for efficiency
    if (startQueue.length <= endQueue.length) {
      levelStart++;
      if (exploreLevel(startQueue, startVisited, endVisited, dictionarySet)) {
        return levelStart + levelEnd + 1;
      }
    } else {
      levelEnd++;
      if (exploreLevel(endQueue, endVisited, startVisited, dictionarySet)) {
        return levelStart + levelEnd + 1;
      }
    }
  }

  return 0;
}

function exploreLevel(queue, visited, otherVisited, dictionarySet) {
  const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const levelSize = queue.length;

  for (let i = 0; i < levelSize; i++) {
    const currentWord = queue.shift();

    for (let j = 0; j < currentWord.length; j++) {
      for (const c of lowerCaseAlphabet) {
        const nextWord =
          currentWord.slice(0, j) + c + currentWord.slice(j + 1);

        // If the other search has already visited this word, searches meet
        if (otherVisited.has(nextWord)) {
          return true;
        }

        if (dictionarySet.has(nextWord) && !visited.has(nextWord)) {
          visited.add(nextWord);
          queue.push(nextWord);
        }
      }
    }
  }

  return false;
}


