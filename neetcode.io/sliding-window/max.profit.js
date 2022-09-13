/**
 * @desc You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * @link https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

const maxProfit = (prices) => {
    let left = 0; // Buy
    let right = 1; // sell
    let max_profit = 0;

    while (right < prices.length) {
      if (prices[left] < prices[right]) {
        let profit = prices[right] - prices[left]; // our current profit
  
        console.log(profit, max_profit);
        max_profit = Math.max(max_profit, profit);
      } else {
        left = right;
      }
      right++;
    }

    return max_profit;
  };

  console.log(maxProfit([[7,1,5,3,6,4]]));