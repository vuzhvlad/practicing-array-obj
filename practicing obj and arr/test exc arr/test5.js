'use strict'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) { 
    if(arr === undefined || arr.length === 0) { //checks if array is empty
        return "Family is empty";
    } else {
    let splitArr = arr.join(" "); //.joun(' ') method to make string from array that has sapces
    let str = `Family contains: ${splitArr}`;
    return str;
    }
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {  //.forEach method to tkae every element and put it to lowerCase
    let str = '';
    arr.forEach( function(word) {
        str += `${word.toLowerCase()}\n`;
    })
    return str;
}

console.log(standardizeStrings(favoriteCities));

const someString = 'asdfasdasdasdasd';

function reverse(str) {
    if(typeof(str) !== 'string') {
        return "error";
    } else {

    let reverseStr = '';
    let reverseArr = str.split(""); //splits every character into an element of the array

    for(let i = reverseArr.length - 1; i >= 0; i--) { //goes through array form the end
        reverseStr += reverseArr[i]; //adds every character one by one form the end
    }
    return reverseStr;
}
}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    const filteredArr = arr.filter( function(curr) { //.filter() method filters all the elements of the array that has 'missingCurr'
        return curr != missingCurr; //return this vlaue
    })
    return filteredArr; //return variable that has this value as a new array
}

console.log(availableCurr(baseCurrencies, 'USD'));