// Given an array of integers,find the highest
// product you can get from three of the integers.
// The input arrayOfInts will always have at least three integers.

//O(nlogn) - NO HINT NEEDED (fails test for negative values)
// function highestProduct(arrayOfInts) {
//   if(arrayOfInts.length === 3) return findProduct(arrayOfInts);
//   arrayOfInts.sort((a,b) => {
//     return b - a;
//   });
//   return findProduct(arrayOfInts);

//   function findProduct(values) {
//     let result = 1;
//     for(let i = 0; i < 3; i++) {
//       if (values[i]) {
//         result *= values[i];
//       }
//     }
//     return result;
//   }
// }


// HINT:
// So at each iteration we're keeping track of and updating:
// highestProductOf3
// highestProductOf2
// highest
// lowestProductOf2
// lowest

function highestProduct(arrayOfInts) {
  let highestProductOf3;
  const firstTwoNums = arrayOfInts.slice(0, 2);
  let highest = Math.max(...firstTwoNums);
  let lowest = Math.min(...firstTwoNums);
  let highestProductOf2 = highest * lowest;
  let lowestProductOf2 = highest * lowest;

  for (let i = 2; i < arrayOfInts.length; i++) {
    let currentNum = arrayOfInts[i];

    if (highestProductOf3 === undefined || currentNum * highestProductOf2 > highestProductOf3) {
      highestProductOf3 = currentNum * highestProductOf2;
    }

    if (currentNum * lowestProductOf2 > highestProductOf3) {
      highestProductOf3 = currentNum * lowestProductOf2;
    }

    highestProductOf2 = Math.max(
      currentNum * highest,
      currentNum * lowest,
      highestProductOf2
    )

    lowestProductOf2 = Math.min(
      currentNum * lowest,
      currentNum * highest,
      lowestProductOf2
    )

    if (currentNum > highest) {
      highest = currentNum;
    }

    if (currentNum < lowest) {
      lowest = currentNum;
    }
  }
  return highestProductOf3;
}

const array = [1, 10, -5, 1, -100];;
highestProduct(array);