//1.1
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