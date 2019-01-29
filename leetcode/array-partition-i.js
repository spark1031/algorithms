const arrayPairSum = (nums) => {
  nums.sort((a, b) => b - a);
  let total = 0;
  for (let i = 1; i < nums.length; i += 2) {
    total += nums[i];
  }

  // let idx = 1;
  // let total = 0;
  // while (idx < nums.length) {
  //     total += nums[idx];
  //     idx += 2;
  // }
  return total;
};