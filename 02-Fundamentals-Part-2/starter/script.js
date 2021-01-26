'use strict'; //activate strict mode... has to be very first statement in script file

/*
    let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('i can drive');



//Function Declaration
function calcAge1(birthYear) {
    return 2021 - birthYear;
}
const age1 = calcAge1(1996);


//function expression
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}
const age2 = calcAge2(1996);


console.log(age1, age2)

//arrow functions!!
const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1996);
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement}`;
}

console.log(yearsUntilRetirement(1996, "Hannah"));
console.log(yearsUntilRetirement(1976, 'Bob'));


//functions calling other functions
function cutFruitPieces(fruit) {
    return fruit * 4
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges)

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3))

const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if (retirement <= 0) {
        return `${firstName} is already retired 🥳`
    } else {
        return `${firstName} retires in ${retirement} years.`
    }
    //return retirement

}

console.log(yearsUntilRetirement(1996, 'Hannah'))
console.log(yearsUntilRetirement(1950, 'Hanzo'))


//A new way to write arrays
const years = new Array(1996, 1997, 1998, 1999, 2000);
console.log(years)

//old way to write arrays
const friends = ['Hannah', 'kate', 'tanner']
console.log(friends[1]) //kate
console.log(friends.length)
console.log(friends[friends.length - 1]) // get the last thing in array

friends[2] = 'Jay' //changing the array... the reason why we can change arrays is bc only primative values are mutable...we can actually mutate the array, but we cannot replace the whole thing
console.log(friends)

//arrays can also hold different value types like..
const firstName = "hannah";
const hannahArray = [firstName, 'Kingsolver', 2021 - 1996, 'softworm engineer', friends]

console.log(hannahArray)


//exercise

//not how we do it
// const calcAge = function (birthYear) {
//     return 2021 - birthYear;
// }
// const years = [1990, 2000, 1982, 2017, 2021]
// console.log(calcAge(years)); //we will get NaN bc the function expects a number not an array

//how we do it
const calcAge = function (birthYear) {
    return 2021 - birthYear;
}
const years = [1990, 2000, 1982, 2017, 2020]
const age1 = calcAge(years[0]); //31
const age2 = calcAge(years[2]); //39
const age3 = calcAge(years[years.length - 1]); //1

const ages = [age1, age2, age3]
console.log(ages)


//Array Methods/ built in functions
const friends = ['Hannah', 'kate', 'tanner']
const newLength = friends.push('Devin') //the push function adds whatever to the end of the array
console.log(friends)
console.log(newLength)

friends.unshift('Scott') // unshifts adds whatever to the beginning of the array
console.log(friends)

//removes elements
friends.pop() //removes the element from the end... if you were to console.log(friends.pop()), it would return 'Devin', bc devin was popped. :)
console.log(friends)

friends.shift() //removes the first element in array
console.log(friends)

//locates index and returns in
console.log(friends.indexOf('kate')) //1

//returns true or false if element is in the array... uses strict equality
console.log(friends.includes('bob')) //false
console.log(friends.includes('kate')) //true
console.log(friends.includes('Kate')) // false

if (friends.includes('Peter')) {
    console.log('You have a friend called Peter.')
} else {
    console.log('you do not have this friend named peter')
}


//OBJECTS!!!!
//object literal syntax
const hannah = {
    firstName: 'Hannah',
    lastName: 'Kingsolver',
    age: 2020 - 1996,
    job: 'Barista',
    friends: ['Kate', 'Tanner', 'Devin']
}
console.log(hannah)
//Dot vs. Bracket Notation... how to retrieve data from objects

//DOT NOTATION!!
console.log(hannah.lastName)
console.log(hannah.friends[0])

//BRACKET NOTATION
console.log(hannah['lastName'])

const nameKey = 'Name';
//cant do this with dot notation
console.log(hannah['first' + nameKey])
console.log(hannah['last' + nameKey])

//cant do this with dot notation
const interestedIn = prompt('What do you want to know about Hannah? You can choose between firstName, lastName, age, job, or friends.');
if (hannah[interestedIn]) {
    console.log(hannah[interestedIn])
} else {
    console.log('Wrong request! Please choose between firstName, lastName, age, job, or friends')
}

hannah.location = 'Dallas, TX';
hannah['twitter'] = '@gnarlolita'
console.log(hannah)

console.log(`${hannah.firstName} has 3 friends, ${hannah.friends[0]}, ${hannah.friends[1]}, and ${hannah.friends[2]}.`);

console.log(hannah.friends.length)


//OBJECT METHODS
const hannah = {
    firstName: 'Hannah',
    lastName: 'Kingsolver',
    birthYear: 1996,
    job: 'Barista',
    friends: ['Kate', 'Tanner', 'Devin'],
    hasDriversLicense: true,
    //we need a function expression here, we cannot use function declarations.
    // calcAge: function (birthYear) {
    //     return 2021 - birthYear;
    // }
    // calcAge: function () {
    //     return 2021 - this.birthYear;
    //     //"this" refers to 'hannah' in this instance... because 'this' is the whole hannah object. so this.birthyear is the value er have in the object.
    // }
    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${hannah.firstName} is ${hannah.calcAge()}-years old, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

//both dot and bracket notation work
// console.log(hannah.calcAge());
// console.log(hannah['calcAge']());
// console.log(this)

//we need to calculate age first before accessing hannah.age.
console.log(hannah.calcAge());
console.log(hannah.age);


//Challenge
//"Hannah is a 24 year old barista and he has a/no drivers license"

console.log(hannah.getSummary());


//FORLOOPS
//forloop keeps running until condition is true
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`)
}

//loop through array
const hannah = [
    'Hannah',
    'Kingsolver',
    2020 - 1996,
    'Barista',
    ['Kate', 'Tanner', 'Devin'],
    true
];
const types = [];

for (let i = 0; i < hannah.length; i++) {
    console.log(hannah[i], typeof hannah[i]);

    //Filling types array
    //types[i]= typeof hannah[i]; one way to do it
    types.push(typeof hannah[i]) //but this is cleaner
}
console.log(types)

const years = [1996, 2000, 2007, 2015, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i])
}
console.log(ages)

//Continue and Break
console.log('---ONLY STRINGS---')
for (let i = 0; i < hannah.length; i++) {
    if (typeof hannah[i] !== 'string') continue;

    console.log(hannah[i], typeof hannah[i]);
}

console.log('---BREAK WITH NUMBER---')
for (let i = 0; i < hannah.length; i++) {
    if (typeof hannah[i] === 'number') break;

    console.log(hannah[i], typeof hannah[i]);
}


const hannah = [
    'Hannah',
    'Kingsolver',
    2020 - 1996,
    'Barista',
    ['Kate', 'Tanner', 'Devin'],
    true
];
//backwards forloop... 4,3,2,1
for (let i = hannah.length - 1; i >= 0; i--) {
    console.log(i, hannah[i])
}

//nested forloop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-----Starting exercise ${exercise} -----`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♂️`)
    }
}
*/

//THE WHILE LOOP

//for comparison
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`)
}

//the while loop version of ^^^^
let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♂️`)
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...')
}

//we want to use a forloop when we need a counter like when we loop over an array, but whenever we dont need to do that, the while loop is the way to go.