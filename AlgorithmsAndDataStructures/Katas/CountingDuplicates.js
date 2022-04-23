function DuplicateCount(str) {
  str = str.toLowerCase()
  var dict = {}

  // for (let i = 0; i < str.length; i++) {
  //   if (Object.keys(dict).includes(str[i])) {
  //     dict[str[i]] = 1
  //   } else {
  //     dict[str[i]] = 0
  //   }
  // }

  Array.from(str).forEach((char) => {
    if (Object.keys(dict).includes(char)) {
      dict[char] = 1
    } else {
      dict[char] = 0
    }
  })

  var result = Object.values(dict).reduce((acc, cur) => (acc += cur), 0)
  return result
}

DuplicateCount('Indivisivility')
