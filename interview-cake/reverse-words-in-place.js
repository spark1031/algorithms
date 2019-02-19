"howdy-my name: Sue! yours?is?".split(/[.:!? -]/);

function reverseWords(message) {
  const words = message.split(/[- ]/);
  let frontIdx = 0;
  let backIdx = words.length - 1;

  while (frontIdx <= words.length / 2) {
    const frontWord = words[frontIdx];
    const backWord = words[backIdx];
    words[frontIdx] = backWord;
    words[backIdx] = frontWord;
    frontIdx++;
    backIdx--;
  }
  return words.join(" ");
}

reverseWords("you-suck-I am cooler than-you")