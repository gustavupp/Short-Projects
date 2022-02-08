// function quickSort(array) {
//   if (array.length <= 1) return array
//   else {
//     let arr = array.slice()
//     let newArray = []
//     let key = [arr[0]]
//     let right = []
//     let left = []

//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > key) right.push(arr[i])
//       else left.push(arr[i])
//     }

//     return newArray.concat(quickSort(left), key, quickSort(right))
//   }
// }

// console.log(
//   quickSort([
//     5, 43, 344, 3, 2, 5, 435, 2, 2, 1.2, 56.5, 3, 0, 435, 4, -6, -5, -65, -5,
//   ])
// )

//[quick],to,[sort]
function quickSort(arr) {
  if (arr.length <= 1) return arr

  let result = []
  let left = []
  let right = []
  let key = [arr[0]] //any value from array

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > key) right.push(arr[i])
    else left.push(arr[i])
  }

  return result.concat(quickSort(left), key, quickSort(right))
}

console.log(
  quickSort([5, 43, 344, 2, 2, 1.2, 56.5, 56.6, 3, 0, 4, -6, -5, -65])
)
