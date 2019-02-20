function isUnique(string) {
  const seenCharacters = new Set();
  for (let i = 0; i < string.length; i++) {
    const currentCh = string[i];
    if (seenCharacters.has(currentCh)) return false;
    seenCharacters.add(currentCh);
  }
  return true;
}

isUnique("he;l;o");