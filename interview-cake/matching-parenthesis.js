function findParenthesis(sentence, openingParenIndex) {
  //parenCounter
  let parenCounter = 0;
  let closingIndex = sentence.length - 1;
  //figure out what # parenthesis openingParenIndex corresponds to
  for (let i = 0; i <= openingParenIndex; i++) {
    if (sentence[i] === "(") {
      parenCounter++;
    }
  }
  //find matching endingParenIndex
  while (true) {
    if (sentence[closingIndex] === ")") {
      parenCounter--;
    }
    if (parenCounter === 0) return closingIndex;
    closingIndex--;
  }
}

const string = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

const string2 = "I am (happy (are you)?)"

findParenthesis(string, 10)