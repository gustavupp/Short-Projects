//Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

var minSubArrayLen = function (target, nums) {
  let minLength = Infinity
  let curLength = 0
  let sum = 0
  let windowStart = 0

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    sum += nums[windowEnd]
    curLength++

    while (sum >= target) {
      minLength = Math.min(minLength, curLength)
      sum -= nums[windowStart]
      windowStart++
      curLength--
    }
  }

  if (minLength === Infinity) return 0
  return minLength
}
