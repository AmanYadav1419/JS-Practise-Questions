// Best Time to Buy and Sell Stocks
// Question :- You have given an array prices after prices[i] in the price of a given stock on the ith day
// You want to maximizie your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock 
// Return the maximum profit you can achieve from this transcation if you cannot achieve any profit 0 (zero)

// Example 1:-
// Input :- prices = [7,1,5,3,6,4]
// Output :- 5
// Explanation :- Buy on day 2 (price = 1) and sell on day 3

// Example 2:-
// Input :- prices = [7,6,4,3,1]
// output :- 0
// Explanation :- in this case no transcations are done 

var maxprofit = function(prices){
    let minPrice = Infinity;
    let maxProfit = 0;

    for(let i = 0; i < prices.length;i++){
        if(prices[i] < minPrice){
            minPrice = prices[i];
        }
        else if(prices[i] - minPrice > maxProfit){
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
}

console.log(maxprofit([7,1,5,3,6,4])); //it will return 5
console.log(maxprofit([7,6,4,3,1])); //it will return 0
