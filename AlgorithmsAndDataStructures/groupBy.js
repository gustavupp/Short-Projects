const arr = [
  { id: 1, category: 'hatch', make: 'ford', price:  },
  { id: 2, category: 'sedan', make: 'fiat', price: 1 },
  { id: 3, category: 'hatch', make: 'honda', price: 1 },
  { id: 4, category: 'sedan', make: 'ford', price: 1 },
  { id: 5, category: 'hatch', make: 'ford', price: 1 },
  { id: 6, category: 'sedan', make: 'fiat', price: 1 },
  { id: 7, category: 'hatch', make: 'honda', price: 1 },
  { id: 8, category: 'sedan', make: 'ford', price: 1 },
]

function groupBy(arr, key) {
  return arr.reduce((acc, cur) => {
    ;(acc[cur[key]] = acc[cur[key]] || []).push(cur)
    return acc
  }, {})
}

//easier to understad
function groupBy1(arr, key) {
  return arr.reduce((acc, cur) => {
    const curKeyValue = key instanceof Function ? key(cur) : cur[key]

    acc[curKeyValue] = acc[curKeyValue] || []
    acc[curKeyValue].push(cur)

    return acc
  }, {})
}

// without the reduce function
function groupBy2(arr, key) {
  let newArr = []

  for (let item of arr) {
    let curKeyValue = item[key]
    if (!newArr[curKeyValue]) newArr[curKeyValue] = []

    newArr[curKeyValue].push(item)
  }

  return newArr
}

// Like C# groupBy
Array.prototype.groupBy = function (keyGetterFunc) {
  let newArr = []

  for (let i = 0; i < this.length; i++) {
    let curKeyValue = keyGetterFunc(this[i])
    if (!newArr[curKeyValue]) newArr[curKeyValue] = []
      newArr[curKeyValue].push(this[i])
  }

  return newArr
}

//MDN Example
function groupByMDN(arr, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property]
    const curGroup = acc[key] ?? []

    return { ...acc, [key]: [...curGroup, obj] }
  }, {})
}

console.log(groupBy1(arr, (x) => x.category))
