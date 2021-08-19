// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// QUADRATIC TIME COMPLEXITY
// function maxProfit(prices){
//     let max = 0
//     for (let i = 0; i < prices.length; i++){
//         let buyPrice = prices[i]
//         for (let y = i+1; y < prices.length; y++){
//             let profit = prices[y] - buyPrice
//             if(profit > max) max = profit
//         }
//     }
//     return max
// }

function maxProfit(prices){
    let maxProfit = 0
    let minPrice = Math.min(...prices)
    for (let i = prices.indexOf(minPrice) + 1; i < prices.length; i++){
        let profit = prices[i] - minPrice
        if (profit > maxProfit) maxProfit = profit
    }
    return maxProfit
}

// LEON'S SOLUTION
function maxProfit(prices){
    let min = Number.POSITIVE_INFINITY
    let max = 0

    for(let i = 0; i < prices.length; i++){
        if(prices[i] < min) min = prices[i]
        else if(prices[i] - min > max) max = prices[i] - min
    }
    return max
}

console.log(maxProfit([7,1,5,3,6,4]), 5)
console.log(maxProfit([7,6,4,3,1]), 0)
console.log(maxProfit([7,6,4,5,3,1]), 1)