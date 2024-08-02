const palindromes = function (string) {
    const stringArr = string
        .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g, "")
        .toLowerCase()
        .split("");
    const stringArrRev = [...stringArr].reverse();
    let returnValue = true;
    for (let index = 0; index < stringArr.length; index++) {
        if (stringArr[index] === stringArrRev[index]) {
            continue;
        } else {
            returnValue = false;
            return returnValue;
        }
    }
    return returnValue;
};

// console.log(palindromes("ZZZZ car, a man, a maracaz."));

// Do not edit below this line
module.exports = palindromes;
