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



//TYPE cONVERSION AND cOERCION

//Type conversion
const inputYear = '1991';
console.log(Number(inputYear)) //with explicit conversion
console.log(inputYear + 18) //199118 without explicit conversion code
console.log(Number('hannah')) //we get NaN
console.log(String(23), 23) //covert to string

//Type Coercion
console.log('I am ' + 23 + ' years old') //I am 23 years old
console.log('23' - '10' - 3) //10
console.log('23' + '10' - 3) //2307
console.log('23' * '2') //46


//TRUTHY AND FALSEY VALUES

//5 falsey values: 0, '', undefined, null, NaN

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Hannah')); //true
console.log(Boolean('')); //false

// const money = 0;
// if (money) {
//     console.log("Dont spend it all ;)")
// } else {
//     console.log('You should get a job!') //this block gets execuited
// }

const money = 400;
if (money) {
    console.log("Dont spend it all ;)") //this block gets execuited since we now have money...
} else {
    console.log('You should get a job!')
}


//SWITCH STATEMENTS

const day = 'friddday'
switch (day) {
    case 'monday': // day === 'monday'
        console.log('Lay in bed')
        console.log('Heal from covid')
        break;
    case 'tuesday':
        console.log('Help')
        break;
    case 'wednesday':
        console.log('its humpday')
        break;
    case 'thursday':
        console.log('thirsty thursday')
        break
    case 'friday':
        console.log('Its friyayyyyy')
        break;
    default://basically am else block at tge end of a long if else statement
        console.log("not a valid day")
}
*/

// Ternary Operator

//expression: something that produces a value
//statement: 

const age = 24;
age >= 21 ? console.log('I like to drink wine 🍷') :
    console.log('I like to drink water 💧');

