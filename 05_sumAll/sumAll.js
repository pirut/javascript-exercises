const sumAll = function (firstNumber, secondNumber) {
  let output = 0;
  if (
    typeof firstNumber !== "number" ||
    typeof secondNumber !== "number" ||
    firstNumber < 0 ||
    secondNumber < 0
  ) {
    return "ERROR";
  } else {
    if (firstNumber > secondNumber) {
      let temp = firstNumber;
      firstNumber = secondNumber;
      secondNumber = temp;g
    }
    for (let adder = firstNumber; adder <= secondNumber; adder++) {
        output += adder;
    }
    return output;
  }
};

// Do not edit below this line
module.exports = sumAll;
