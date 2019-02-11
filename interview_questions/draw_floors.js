//Marqeta onsite whiteboarding qu.

function drawFloors(numOfFloors, blockDimensions) {
  const blockWidth = blockDimensions[0];
  const blockHeight = blockDimensions[1];

  const baseWidth = blockWidth + ((numOfFloors - 1) * 2 * blockWidth);

  let floor = numOfFloors - 1;
  while (floor >= 0) {
    let line = generateLine();
    for (let i = 0; i < blockHeight; i++) {
      console.log(line);
    }
    floor -= 1;
  }

  function generateLine() {
    const numOfStars = baseWidth - (floor * blockWidth * 2);
    const numOfSpaces = baseWidth - numOfStars;
    const result = [];
    for (let i = 0; i < numOfSpaces / 2; i++) {
      result.push("-");
    }

    for (let i = 0; i < numOfStars; i++) {
      result.push("*");
    }

    for (let i = 0; i < numOfSpaces / 2; i++) {
      result.push("-");
    }

    return result.join("");
  }
}

drawFloors(3, [4, 3])