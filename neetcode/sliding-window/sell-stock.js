/**
 * You are given an array prices where prices[i] is the price of a given stock on the i^th day.
 * 
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * 
 * Return the maximum profit you can achieve from this transaction, if you cannot achieve any profit, return 0.
 * 
 * Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * 
 * Result:
 */

const maxProfit = (prices) => {
    if (prices.length < 1) return null;

    let maxProf = 0;
    let tempProf = 0;

    for (let i = prices.length - 1; i >= prices.length - 2; i--) {
        maxProf -= prices[i];
    }

    console.log(maxProf);
}


console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
