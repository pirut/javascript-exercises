const findTheOldest = function (arr) {
    arr.map((person) => {
        const birth = person.yearOfBirth;
        let death;
        person.yearOfDeath === undefined ? (death = new Date().getFullYear()) : (death = person.yearOfDeath);
        person.age = death - birth;
    });
    return arr.reduce((largest, current) => {
        if (largest.age > current.age) {
            return largest;
        } else {
            largest = current;
            return largest;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
