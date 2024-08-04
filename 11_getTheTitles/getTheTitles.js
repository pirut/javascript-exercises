const getTheTitles = function (arr) {
    let returnArr = [];
    for (const book of arr) {
        returnArr.push(book.title);
    }
    return returnArr;
};

// Do not edit below this line
module.exports = getTheTitles;
