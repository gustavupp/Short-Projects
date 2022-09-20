let text =
  "In a 'village' of La Mancha, the name' 'of which's I have no desire /to call ///to ##mind"

function topThreeWords(text) {
  let regex = /(?:\w|['-]\w)+/g
  let returnArray = []
  let quantities = {}

  let wordsArray = text.match(regex)
  console.log(wordsArray)

  wordsArray.forEach((w) => {
    w = w.toLowerCase()
    quantities[w] = quantities[w] ? quantities[w]++ : 1
  })

  console.log(quantities)
}

console.log(topThreeWords(text))
