//Question 1) Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

let country = "United States of America";
let continent = "North America";
let population = "331,000,000";
console.log(country)
console.log(continent)
console.log(population)

//Question 2) Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

let isIsland = "false";
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//Question 3 Let, Const, Var
// 1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

language = 'English';
const country = 'US'; //already been declared error message
const continent = 'North America'; //already been declared error message
const isIsland = 'false'; // ^^ same as that, but to get rid of the error message all we need
//to do is get ride of the const, or declare the const at the top where we first declared it.
isIsland = true;