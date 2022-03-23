//You are given an array prices where prices[i] is the price of a given stock on the ith day.
//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
//Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

function maxProfit(prices) {
  let curMax = 0,
    max = 0,
    left = 0

  for (let right = 1; right < prices.length; right++) {
    if (prices[right] > prices[left]) {
      curMax = prices[right] - prices[left]
      max = Math.max(curMax, max)
    } else {
      left = right
    }
  }
  return max
}
