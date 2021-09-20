"use strict"

let num = 20;

function showFirstMessage(text) { // существует до того как код запустится
    console.log(text);
    console.log(num);
}

showFirstMessage('hello world');
console.log(num);

/*function calc(a,b) {
    return (a + b);
}
console.log(calc(4,3))
console.log(calc(4,5))
console.log(calc(7,6))*/

function ret() {
    let num = 50;
    return num;
}

const  anotherNum = ret();
console.log(anotherNum);

/*logger();*/

const logger = function() { // создаётся когда до нее дозодит код
    console.log('hello')
};

logger();

const calc = (a, b) => { return a + b };

calc();