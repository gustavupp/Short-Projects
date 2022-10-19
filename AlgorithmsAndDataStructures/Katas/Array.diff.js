function arrayDiff1(a, b) {
  let arr = []
  a.forEach((el, index) => {
    console.log({ el, index, b })
    if (!b.includes(el)) {
      arr.push(el)
    }
  })

  return arr
}

function arrayDiff(a, b) {
  return a.filter((el) => !b.includes(el))
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]))
