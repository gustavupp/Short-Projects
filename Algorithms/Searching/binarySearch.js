function binarySearch(searchList, value) {
  if (searchList.length === 1 && searchList[0] === value) return value
  if (searchList.length === 1) return 'Not Found'

  let middleIndex = Math.floor(searchList.length / 2)
  let middleValue = searchList[middleIndex]

  if (value === middleValue) return middleValue

  let left = searchList.slice(0, middleIndex)
  let right = searchList.slice(middleIndex)

  console.log({ middleValue })

  if (value > middleValue) return binarySearch(right, value)
  else return binarySearch(left, value)
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 5))
