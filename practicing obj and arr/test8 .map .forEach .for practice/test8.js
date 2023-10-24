'use strict'

// Sample array
const numbers = [1, 2, 3, 4, 5];

// Use forEach to add 5 to each element
numbers.forEach((element, index, array) => {
  array[index] = element + 5;
});

console.log(numbers); // This will print [6, 7, 8, 9, 10]


const a = [1, 2, 3, 4, 5, 6];

const vlad = function(arr) {
    const trafim = arr.map( function(num) {
        return num + 5;     //return for .map()
    });
    return trafim;
}

console.log(vlad(a));


const b = [1, 2, 3, 4, 5, 6];

const trafim = function(arr) {
    arr.forEach((item, i, array) => { // (item, i, array) - always like that 
        array[i] = item + 10;
    })
    return arr;
};
console.log(trafim(b));
const c = [1, 2, 3, 4, 5, 6];

const damir = function(arr) {
    const misha = arr.filter((num) => {  // always need a place where to put this array
        return num > 2;    // return as well it will put all numbers that are greater than 2 into a new array
    });
    return misha;
};

console.log(damir(c));