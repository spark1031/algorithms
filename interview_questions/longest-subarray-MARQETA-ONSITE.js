function longestSubArray(arr, target) {
  //two pointers (one for end of subarray, one for beginning)
  //move end pointer if sum is <= target
  //move front pointer if sum is > target
  //after moving a pointer, check the subarray's length (if greater than maxLength then reassign maxLength and maxSubArray)
  //return maxSubArray at the end
  //keep track of maxLength (seen thus far)
  //keep track of maxSubArray (seen thus far)

  let endPointer = 0;
  let frontPointer = 0;
  let maxLength = 0;
  let bestFront;
  let bestEnd;
  let currentSum = arr[0];
  while (endPointer < arr.length) {
    while (currentSum <= target) {
      if (endPointer - frontPointer + 1 > maxLength) {
        maxLength = endPointer - frontPointer + 1;
        bestFront = frontPointer;
        bestEnd = endPointer;
      }
      endPointer++;
      currentSum += arr[endPointer];
    }

    while (currentSum > target) {
      currentSum -= arr[frontPointer];
      frontPointer++;
    }
  }

  return arr.slice(bestFront, bestEnd + 1);
}




const array = [1, 2, 1, 3, 1, 1, 1, 2, 1];
const k = 6;
longestSubArray(array, k)