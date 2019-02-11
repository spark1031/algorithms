// O(n) time; O(1) space - ideal
// var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
// getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)

// function getMaxProfit(stockPricesYesterday) {
//   let maxDifference = 0;
//   for(let i = 0; i < stockPricesYesterday.length; i++) {
//     let buyPrice = stockPricesYesterday[i];
//     for(let j = i + 1; j <stockPricesYesterday.length; j++) {
//       let sellPrice = stockPricesYesterday[j];
//       if (sellPrice - buyPrice > maxDifference) {
//         maxDifference = sellPrice - buyPrice;
//       }
//     }
//   }
//   return maxDifference;
// }

function getMaxProfit(stockPricesYesterday) {
  let minBuyPrice = stockPricesYesterday[0];
  let maxDifference = 0;
  for (let i = 1; i < stockPricesYesterday.length; i++) {
    let sellPrice = stockPricesYesterday[i];
    if (sellPrice - minBuyPrice > maxDifference) {
      maxDifference = sellPrice - minBuyPrice;
    }

    if (sellPrice < minBuyPrice) {
      minBuyPrice = stockPricesYesterday[i];
    }
  }
  return maxDifference;
}

const stockPricesYesterday = [12, 4, 5, 11, 11, 9];
getMaxProfit(stockPricesYesterday);