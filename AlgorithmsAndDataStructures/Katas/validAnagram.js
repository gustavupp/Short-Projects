//242. Valid Anagram
/*Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.*/

//time complexity O(n) and space O(n)
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  let hashMapS = {} //create hashmaps
  let hashMapT = {}

  for (let i = 0; i < s.length; i++) {
    //count amount of ocurrences of each character and map character and count
    hashMapS[s[i]] = hashMapS[s[i]] ? hashMapS[s[i]] + 1 : 1
    hashMapT[t[i]] = hashMapT[t[i]] ? hashMapT[t[i]] + 1 : 1
  }

  for (let i = 0; i < t.length; i++) {
    //if given character and count does't match on both return false
    if (hashMapS[s[i]] !== hashMapT[s[i]]) return false
  }
  return true
}

console.log(isAnagram('aabbbb', 'aaaabb'))

// var isAnagram = function (s, t) {
//   let newS = Array.from(s)
//     .sort((a, b) => a.localeCompare(b))
//     .join('')
//   let newT = Array.from(t)
//     .sort((a, b) => a.localeCompare(b))
//     .join('')
//   if (newS === newT) return true
//   else return false
// }
