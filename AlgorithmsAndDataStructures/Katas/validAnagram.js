//242. Valid Anagram
/*Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.*/

//bit O(2n) solution.
// var isAnagram = function (s, t) {
//   let sSum = 0
//   let tSum = 0

//   for (let i = 0; i < s.length; i++) {
//     //add all char codes of each letter
//     sSum += s[i].charCodeAt()
//   }
//   for (let i = 0; i < t.length; i++) {
//     tSum += t[i].charCodeAt()
//   }
//   if (sSum === tSum) return true
//   //compare the suma
//   else return false
// }

var isAnagram = function (s, t) {
  let newS = Array.from(s)
    .sort((a, b) => a.localeCompare(b))
    .join('')
  let newT = Array.from(t)
    .sort((a, b) => a.localeCompare(b))
    .join('')
  if (newS === newT) return true
  else return false
}

console.log(isAnagram('aa', 'aa'))
