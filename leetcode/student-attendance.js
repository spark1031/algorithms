// @param {string} s
// @return {boolean}

const checkRecord = (s) => {
  let absentCounter = 0
  const letters = s.split("");
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === "A") {
      absentCounter += 1;
    }
    if (letters[i] === "L") {
      if (letters[i + 1] === "L" && letters[i + 2] === "L") {
        return false;
      }
    }
  }

  if (absentCounter > 1) return false;
  return true;
};