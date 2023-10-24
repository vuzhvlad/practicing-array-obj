'use strict'

const arr = [1, 2, 3, 4, 5, 6];

arr.pop(); // method removes the last element of array
arr.push(10); // method adds the last element of array

console.log(arr);

for(let i = 0; i < arr.length; i++) {   // to og through array
    console.log(arr[i]);
}

for(let value of arr) {  // to go through array with method 'for of'(works only with array)
    console.log(value);
}

arr[99] = 0;
console.log(arr.length); // length for arrays is the last index + 1



const array = [1, 2, 3, 4, 5, 6];

array.forEach(function(item, i, array) {                  // method forEach has a parameter of callback function that has a parameter of 3 elements
      console.log(`${i}: ${item} inside of ${array}`);  // item - is an items in array, i - is a number of those items and arr - is array that you have
});

//method 'for of' can be better than forEach because you cna use break and continue inside of 'for of'

const str = prompt("", "");    // get a products from user
const products = str.split(", ");  // we make an array with method split by splitting with ","
console.log(products);
console.log(products.join('; ')) // makes array into a string with "; " sepreator
console.log(products.sort());  // it sorts an elements by alphabet


const num = [4, 25, 1234, 64, 345, 21];
num.sort(); // it sorts as a string and it sorts by first letter than another letter etc.
console.log(num);

function compareNum(a, b) { //callback function for .sort() to sort numbers properly
    return a - b;
}
num.sort(compareNum); // put it as a number
console.log(num);