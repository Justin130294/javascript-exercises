const findTheOldest = function(persons) {
    const oldest = persons.reduce((object, person) => {
        let birthYear = person.yearOfBirth;
        let deathYear
        if (!person.yearOfDeath) {
            deathYear = new Date().getFullYear();
        } else {
            deathYear = person.yearOfDeath;
        }
        let age = deathYear - birthYear;

        if (!object.yearOfDeath) {
            object.yearOfDeath = new Date().getFullYear();
        }

        if (age > (object.yearOfDeath - object.yearOfBirth)) {
            object = person;
        }
        return object;
    }, {yearOfBirth: 1, yearOfDeath:1});
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  findTheOldest(people);
