// Given an array of positive numbers and a positive number âk,â find the maximum sum of any contiguous subarray of size âkâ.
const max_sub_array_of_size_k = function (k, arr) {
  let windowSum = 0,
    windowStart = 0,
    maxSum = 0

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]

    if (windowEnd >= k - 1) {
      maxSum = windowSum > maxSum ? windowSum : maxSum
      windowSum -= arr[windowStart]
      windowStart++
    }
  }

  return maxSum
}
