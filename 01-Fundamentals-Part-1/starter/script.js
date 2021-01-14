/*
// first lecture

// let js = 'amazing';
// console.log(40 + 8 + 23 - 8);

//Second Lecture Data Types

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Hannah');

//dynamic typing in action... we do not put 'let' again to change the value of this variable
javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

//undefined
let year;
console.log(year); //undefined
console.log(typeof year); //undefined

//dynamic typing... adding a year
year = 2021;
console.log(typeof year); //number
*/

/*
//LET, VAR, AND CONST

//mutating the variable 
let age = 24;
age = 25;

// const birthYear = 1996;
// birthYear = 1990;

var job = 'programmer'
job = 'gay'


// OPPERATORS
const ageHannah = 2021 - 1996;
const ageTanner = 30;
console.log(ageHannah, ageTanner)
console.log(ageHannah * 2 / 5)
*/

//Strings and String Literals
//a cool thing introduced with es6 is `` aka backticks. you can do things like...\
const firstName = 'Hannah'
const greeting = 'enjoy your stay'
const welcomeMessage = `Hello, my name is ${firstName} and I will be your guide today. ${greeting} and let me know if you need anything.`

console.log(welcomeMessage)

//you can also do things like... instead of having to type /n everytime you want a new line
const goofin = `Hello
new line
new line
bye.
`

console.log(goofin)