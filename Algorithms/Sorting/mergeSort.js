// //devides array in 2 recursevely and calls merge on subarrays
// function mergeSort(arr) {
//   if (arr.length <= 1) return arr

//   let middle = Math.floor(arr.length / 2)
//   let left = arr.slice(0, middle)
//   let right = arr.slice(middle)

//   return merge(mergeSort(left), mergeSort(right))
// }

// //sorts and merges subarrays
// function merge(leftArr, rightArr) {
//   let sorted = []

//   while (leftArr.length && rightArr.length) {
//     if (leftArr[0] < rightArr[0]) sorted.push(leftArr.shift())
//     else sorted.push(rightArr.shift())
//   }

//   //return sorted.concat(rightArr).concat(leftArr) //ES5 Version
//   return [...sorted, ...rightArr, ...leftArr]
// }

// [merge] [sort]
function mergeSort(arr) {
  if (arr.length <= 1) return arr

  let middle = Math.floor(arr.length / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let result = []

  while (left.length && right.length) {
    if (left[0] > right[0]) result.push(right.shift())
    else result.push(left.shift())
  }

  return [...result, ...left, ...right]
}

console.log(mergeSort([2, 4, 1, 0, -6, 98, 3, 6, 5, 7, 999, -299, 0, 1]))
