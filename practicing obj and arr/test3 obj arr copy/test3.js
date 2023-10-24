'use strict'

let a = 5;

let b = a;

b = b + 5;

console.log(b);  // logs 10
console.log(a);  // logs 5



const obj = {
    a: 5,
    b: 1
};

const copy = obj;  // when you work with objects
// it gives a link to another element
copy.a = 10; // it changes two of them

console.log(copy);
console.log(obj);

function copy(mainObj) {
    let objCopy = {};
    
    let key;
    for(key in mainObj) { //it goes through object and makes a copy of that
        objCopy[key] = mainObj[key];
    }
    return objCopy;

}


const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 1,
        y: 8
    }
}

const newNumbers = copy(numbers);
newNumbers.a = 4; //this works
newNumbers.c.y = 5; // this one does not
console.log(newNumbers);
console.log(numbers); // copy worked



const add = {
    d: 19,
    f: 25
}

console.log(Object.assign(numbers, add));


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // .slice() method that can help to copy an array

console.log(newArray);

const video = ['yout', 'rutube', 'fsgd'];
const man = ['big', 'small', 'average'];
const everything = [...video, ...man, 'vk', 'facebook']; // ... - operator 'spread' that can put an old arrays into a another one

console.log(everything);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [1, 2, 3];
log(...num); //spread operetor that spreads array

const vlad = [1, 2, 3, 4, 5];
const newVlad = [...vlad]; // makes a copy of an array with spread operator

const trafim = {
    vlad: 18,
    damir: 18
}

const newTrafim = {...trafim, lena: 19}; // the same spread operator for object as well
console.log(newTrafim);
