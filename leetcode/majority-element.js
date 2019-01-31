const majorityElement = (nums) => {
  const counter = {};
  nums.forEach(num => {
    if (counter[num] === undefined) {
      counter[num] = 1;
    } else {
      counter[num] += 1;
    }
  });
  const numKeys = Object.keys(counter)
  for (let i = 0; i < numKeys.length; i++) {
    if (counter[numKeys[i]] > nums.length / 2) {
      return numKeys[i]
    }
  }
};