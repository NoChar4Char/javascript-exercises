const findTheOldest = function(people) {
  people.sort((a, b) => {
    let aDeath = a.yearOfDeath === undefined ? 2026 : a.yearOfDeath
    let bDeath = b.yearOfDeath === undefined ? 2026 : b.yearOfDeath

    return (bDeath - b.yearOfBirth) - (aDeath - a.yearOfBirth)
  })
  return people[0]
};

// Do not edit below this line
module.exports = findTheOldest;
