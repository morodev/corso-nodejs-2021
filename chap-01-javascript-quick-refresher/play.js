const name = 'luca moro';
let age = 32;
var work = 'Front-End Developer - Angular specialist';
var hasMarried = false;

age = 31;

function printPerson(name, age, work, hasMarried) {
    return ("Ciao, io sono " + name + ", ed ho " + age + " anni, la mia professione è " + work + ", sono sposato?" + hasMarried);
}

console.log(printPerson(name, age, work, hasMarried));
