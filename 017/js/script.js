"use strict"

const str = 'tEst';

//console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit'));

const logg = 'Hello world';

console.log(logg.slice(6,11));//не включается

console.log(logg.substring(6,11));

console.log(logg.substr(6,5));

const num = 12.8;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseFloat(test));