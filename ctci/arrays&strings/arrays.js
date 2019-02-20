//1.1 O(n^2) time; O(1) space
function isUnique(string) {
  for (let i = 0; i < string.length; i++) {
    let currentLetter = string[i];
    for (let j = i + 1; j < string.length; j++) {
      let comparisionLetter = string[j];
      if (currentLetter === comparisionLetter) {
        return false;
      }
    }
  }
  return true;
}

//1.1 O(n) time; O(1) space
function isUnique(string) {
  if (string.length > 128) return false;
  const letters = {};
  for (let i = 0; i < string.length; i++) {
    let current = string[i];
    if (letters[current]) {
      return false;
    }
    letters[current] = true;
  }
  return true;
}