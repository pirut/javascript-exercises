const removeFromArray = function(refArray, ...removalArgs) {
    let output = [];

    for (const refItem of refArray) {
        if (removalArgs.includes(refItem)) {
            continue;
        }
        else {
            output.push(refItem);
            continue;
        }
    }
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
