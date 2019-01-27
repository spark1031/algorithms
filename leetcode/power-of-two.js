const isPowerOfTwo = (n) => {
  const power = Math.log2(n);
  if (Number.isInteger(power) || power === 0) return true;
  return false;
};