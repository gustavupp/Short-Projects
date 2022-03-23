//You are given an integer array nums consisting of n elements, and an integer k.
//Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

var findMaxAverage = function (nums, k) {
  let windowStart = 0
  let maxAverage
  let curWindow = 0

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    curWindow += nums[windowEnd]

    if (windowEnd >= k - 1) {
      if (!maxAverage) maxAverage = curWindow / k
      maxAverage = Math.max(maxAverage, curWindow / k)
      curWindow -= nums[windowStart]
      windowStart++
    }
  }

  return maxAverage
}
