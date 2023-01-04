function arrayDiff1(a, b) {
  let arr = []
  a.forEach((el, index) => {
    if (!b.includes(el)) {
      arr.push(el)
    }
  })

  return arr
}

function arrayDiff(a, b) {
  return a.filter((el) => !b.includes(el)) //b.indexOf(x) == -1
}

function array_diff(a, b) {
  b = new Set(b)
  return a.filter((v) => !b.has(v))
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]))
