// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const calcAge = birthYear => 2037 - birthYear;

console.log('hi');

const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [-1, 8, 6, 3, 0, 'error', 70];

const temperatures = temperatures1.concat(temperatures2);
//1) Understanding the problem
//- What is amplitutde? Answer: difference between the hightest and lowest temp
//- How to compute max and min tempuratures?
//- Whats a sensor error? And what to do?

//Breaking up into sub-problems
//- How to ignore errors?
//- find max value in temp array
//find min value in temp array
//-subtract min from max and return it
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
*/

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',

    //C) FIX
    value: Number(prompt('Degrees celcius:')),
  };
  //B)FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
