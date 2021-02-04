function maxProfit(prices: number[]): number {
  var min = Infinity;
  var max = 0;

  for (var i = 0; i < prices.length; i++) {
    if (min > prices[i]) min = prices[i];
    else if (max < prices[i] - min) max = prices[i] - min;
  }

  return max;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
