/*Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
A substring is a contiguous sequence of characters in a string.*/

var countGoodSubstrings = function (s) {
  let winStart = 0,
    count = 0,
    curString = ''

  for (let winEnd = 0; winEnd < s.length; winEnd++) {
    if (curString.indexOf(s[winEnd]) === -1)
      curString = curString.concat(s[winEnd])
    else {
      winStart++
      curString = curString.slice(1)
      winEnd--
    }

    if (curString.length >= 3) {
      count++
      winStart++
      curString = curString.slice(1)
    }
  }
  return count
}

console.log(countGoodSubstrings('kdienfndj'))
