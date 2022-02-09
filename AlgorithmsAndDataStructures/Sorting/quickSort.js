//[quick],to,[sort]
function quickSort(array) {
  if (array.length <= 1) return array
  else {
    let newArray = []
    let key = [arr[0]]
    let right = []
    let left = []

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > key) right.push(arr[i])
      else left.push(arr[i])
    }

    return newArray.concat(quickSort(left), key, quickSort(right))
  }
}

console.log(
  quickSort([
    5, 43, 344, 3, 2, 5, 435, 2, 2, 1.2, 56.5, 3, 0, 435, 4, -6, -5, -65, -5,
  ])
)
