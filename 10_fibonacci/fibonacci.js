const fibonacci = function (number) {
    number = parseInt(number);
    let total = 0;
    let past = 0;
    let next = 1;
    if (number < 0) {
        return "OOPS";
    } else if (number === 1) {
        return 1;
    } else {
        for (let i = 1; i < number; i++) {
            total = past + next;
            past = next;
            next = total;
        }
        return total;
    }
};

// Do not edit below this line
module.exports = fibonacci;
