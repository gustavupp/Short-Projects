/*Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.*/

var maxSubArray = function (nums) {
  let currSum = nums[0]
  let maxSum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    currSum += nums[i]
    if (currSum > maxSum) maxSum = currSum
    if (nums[i] > maxSum) maxSum = nums[i]
    if (nums[i] > currSum) currSum = nums[i]
  }
  return maxSum
}

console.log(maxSubArray([8, -19, 5, -4, 20]))
