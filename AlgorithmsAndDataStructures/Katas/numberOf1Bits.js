//LeetCode 191. Number of 1 Bits
/*Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).*/

var hammingWeight = function (n) {
  let counter = 0
  while (n) {
    console.log({ n: n, counter })
    counter += n & 1
    n = n >> 1
  }

  return counter
}

console.log(hammingWeight(00000000000111110010000000001011))
