function anagrams(word, words) {
  let arrayWithReverseWords = []
  let result = []

  word = Array.from(word).sort().join('')
  arrayWithReverseWords = words.map((w) => (w = Array.from(w).sort().join('')))

  for (let i = 0; i < words.length; i++) {
    if (arrayWithReverseWords[i] === word) result.push(words[i])
  }

  return result
}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))

//alternative shorter
function anagrams1(word, words) {
  words.filter(
    (w) => w.split('').sort().join('') === word.split('').sort().join('')
  )
}
