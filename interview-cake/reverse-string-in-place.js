function reverseString(str) {
  const lettersArr = str.split("");
  let frontIdx = 0;
  let backIdx = str.length - 1;

  while (frontIdx <= str.length / 2) {
    //swap front and back lettersArr
    const frontLetter = lettersArr[frontIdx];
    const backLetter = lettersArr[backIdx];
    lettersArr[frontIdx] = backLetter;
    lettersArr[backIdx] = frontLetter;
    //increment front and decrement back
    frontIdx++;
    backIdx--;
  }
  return lettersArr.join("");
}


const string = "amazing";
reverseString(string);