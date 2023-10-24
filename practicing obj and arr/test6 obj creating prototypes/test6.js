'use strict'

let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));


const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("hEllo!");
    }
};

const vlad = Object.create(soldier); // creates new object that is a prototype of soldier;

const john = {
    health: 100,
};

//!!!!!!!  john.__proto__ = soldier;  // prototype john is soldier OLD METHOD

Object.setPrototypeOf(john, soldier); // modern method how to set prototype Object.setPrototypeOf(1 - who will get this prototype, 2 -who gives its prototype);



console.log(john);
console.log(john.armor); // he s got armor from his prototype
john.sayHello(); // works from his prototype

