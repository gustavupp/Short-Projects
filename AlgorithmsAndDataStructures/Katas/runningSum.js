const runningSum = function (nums) {
  let res = []
  let cursum = 0

  for (let i = 0; i < nums.length; i++) {
    cursum += nums[i]
    res.push(cursum)
  }

  return res
}

console.log(
  runningSum([
    7, 0, 84, 78, 26, -63, -24, 96, -42, 15, 65, -99, -39, 100, 84, -38, -95,
    -33, -69, 100, -36, -45, 84, -39, 61, -77, 85, -34, -15, -32, -31, -18, -75,
    90, -98, -85, 39, 66,
  ])
)
