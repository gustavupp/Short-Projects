//Implement Selection Sort
// Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.

const selectionSort = (array) => {
  let arr = array.slice()

  for (let i = 0; i < arr.length; i++) {
    let min = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
        min = arr[i]
      }
    }
  }
  return arr
}

console.log(selectionSort([7, 4, 2, 3, 0, 123, 4453, 6, 435, 54, -4, -222]))
