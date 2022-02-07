function maxSumBetweenTwoNegatives(array) {
  let maxSum = 0 //max sum in between two negatives
  let currSum = 0 //current max sum
  let negatives = 0
  let i = 0

  //only start verifying the sum of ints after finding the first negative int
  while (array[i] >= 0) {
    i++
  }

  for (let j = i; j < array.length; j++) {
    if (array[j] < 0) negatives++ //keep track of the amount of negatives
    if (array[j] >= 0 && (array[j + 1] && array[j - 1]) !== undefined) {
      if (array[j - 1] < 0) {
        currSum = array[j]
        if (array[j + 1] < 0 && currSum > maxSum) maxSum = currSum
      } else {
        currSum += array[j]
        if (array[j + 1] < 0 && currSum > maxSum) maxSum = currSum
      }
    }
  }

  if (maxSum === 0 && negatives >= 2) return 0 //if there is nothing between negatives and there are at least 2 negatives ints, return 0
  if (maxSum === 0) return -1
  return maxSum
}

console.log(maxSumBetweenTwoNegatives([-2, 2, 0, -2]))
