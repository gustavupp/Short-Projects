/*You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
Find and return the maximum profit you can achieve.*/

var maxProfit = function (prices) {
  let curProfit = 0,
    left = 0

  for (let right = 1; right < prices.length; right++) {
    if (prices[right] > prices[left]) {
      curProfit += prices[right] - prices[left]
      left = right
    } else {
      left = right
    }
  }
  return curProfit
}
