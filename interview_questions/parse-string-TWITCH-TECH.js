// O(n) solution
// function parseString(string, dictionary) {
//   let lookUpWord = "";
//   let resultStr = "";
//   let idx = 0;
//   while (idx < string.length) {
//     if(string[idx] === "{") {
//       idx++;
//       while(string[idx] !== "}") {
//         lookUpWord = lookUpWord.concat(string[idx]);
//         idx++;
//       }
//       resultStr = resultStr.concat(dictionary[lookUpWord]);
//       lookUpWord = "";
//       idx++;
//     } else {
//       resultStr = resultStr.concat(string[idx]);
//       idx++; 
//     }
//   }
//   return resultStr;
// }

// O(dictionary.length * string.length)
function parseString(string, dictionary) {
  const dictionaryWords = Object.keys(dictionary);
  dictionaryWords.forEach(word => {
    let wordIdx = string.indexOf(word);
    if (wordIdx) {
      string = string.slice(0, wordIdx - 1) + dictionary[word] + string.slice(wordIdx + word.length + 1);
    }
  });
  return string;
}


const str = "hello, {first_name} {last_name}!"
const dictionary = {
  first_name: 'Sue',
  last_name: 'Park'
};

parseString(str, dictionary);


//  ATTEMPT: MAP SOLUTION
// function parseString(string, dictionary) {
//   const words = string.split(/[ }]/);
//   let result = ""
//   const newWords = [];


//   words.forEach(word => {
//     if(word[0] === "{") {
//       console.log(dictionary[word.slice(1)]);
//       newWords.push(dictionary[word.slice(1)])
//     } else {
//       newWords.push(word);
//     }
//   });

//   for(let i = 0; i < newWords.length; i++) {
//     if(i !== 0 && newWords[i][0]) {

//     }
//     result.concat(`newWords[i] `)
//   }

//   return newWords.join("")
// }