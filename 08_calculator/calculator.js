const add = function (numberOne, numberTwo) {
    return numberOne + numberTwo;
};

const subtract = function (numberOne, numberTwo) {
    return numberOne - numberTwo;
};

const sum = function (array) {
    const reduced = array.reduce((total, current) => {
        return total + current;
    }, 0);
    return reduced;
};

const multiply = function (array) {
    const reduced = array.reduce((total, current) => {
        return total * current;
    }, 1);
    return reduced;
};

const power = function (numberOne, numberTwo) {
    let returnValue = numberOne;
    for (let i = 1; i < numberTwo; i++) {
        returnValue *= numberOne;
    }

    return returnValue;
};

const factorial = function (number) {
    let returnValue = number;
    if (returnValue === 0) {
        return 1;
    }
    for (let i = number - 1; i > 0; i--) {
        returnValue *= i;
    }

    return returnValue;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
