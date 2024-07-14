const repeatString = function(string, quantity) {

    let output = ""

    if (quantity < 0 || typeof string !== "string" ) {
        return "ERROR";
    }
    else {
        for (let i = 0; i < quantity; i++) {
            output += string;
        }
        return output;
    }
};

// Do not edit below this line
module.exports = repeatString;
