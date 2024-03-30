const findTheOldest = function(people) {
    let output = people.reduce((oldest, person) => {
        person.age = 'yearOfDeath' in person ? 
            person.yearOfDeath - person.yearOfBirth:
            new Date().getFullYear() - person.yearOfBirth;
        return oldest.age < person.age || oldest.age === undefined ?
            oldest = person : oldest;
    }, 0);
    return output;
}

// Do not edit below this line
module.exports = findTheOldest;
