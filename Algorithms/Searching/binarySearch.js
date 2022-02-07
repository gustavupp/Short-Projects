//iterative approach
function IterativeBinarySearch(searchList, value) {
  let left = 0
  let right = searchList.length - 1

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)

    if (value === searchList[middle]) return searchList[middle]
    else if (value > searchList[middle]) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  return 'Value Not Found'
}
console.log(IterativeBinarySearch([1, 2, 3, 4, 5, 6, 7], 1))

//recursive approach
function binarySearch(searchList, value) {
  if (searchList.length < 1) return 'Value Not Found'

  let middle = Math.floor((0 + searchList.length - 1) / 2)
  if (searchList[middle] === value) return searchList[middle]
  else if (searchList[middle] > value)
    return binarySearch(searchList.slice(0, middle), value)
  else return binarySearch(searchList.slice(middle + 1), value)
}

//console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 5))
