//implement bubble sort.
// bubble sort requires multiple iterations through the array and for average and worst cases has quadratic time complexity. While simple, it is usually impractical in most situations.

const bubbleSort = (array) => {
  let sortedArray = array.slice()

  for (let j = 0; j < sortedArray.length; j++) {
    for (let i = 0; i < sortedArray.length - 1; i++) {
      if (sortedArray[i] > sortedArray[i + 1]) {
        ;[sortedArray[i], sortedArray[i + 1]] = [
          sortedArray[i + 1],
          sortedArray[i],
        ]
      }
    }
  }
  return sortedArray
}

console.log(
  bubbleSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
)
