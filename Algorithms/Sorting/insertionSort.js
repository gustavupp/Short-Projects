function insertionSort(array) {
  let arr = array.slice()
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let key = arr[i + 1]
      j = i
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j]
        j--
      }
      arr[j + 1] = key
    }
  }
  return arr
}

console.log(insertionSort([2, 6, 8, 4, 5454, 1345, 43, 65]))
