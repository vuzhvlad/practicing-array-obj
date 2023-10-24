'use strict' 

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(options.colors.border);

delete options.name; //deletes element from object

let counter = 0; // counts keys in counter

for(let key in options) { // to go through object( it will work that many times that keys in object)
    if (typeof(options[key]) === 'object') { //if it finds an object it goes through another object inside of object
        for(let i in options[key]) {     //so in this example we go through object [colors]
            console.log(`Key: ${i} contains element: ${options[key][i]}`);   // options[key][i] = options.colors.border or options.colors.bg
            counter++;
        } 
    } else {
    console.log(`Key: ${key} contains element: ${options[key]}`);  // options[key] - to get into element of the key
    counter++;
    }
}

console.log(counter);


const info = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {  //method that you create in objects
        console.log("Test");
    }
};

console.log(Object.keys(info)); // Object.keys(name of obj) - constructs array with key names of object that you chose
console.log(Object.keys(info).length); // gets a length of object

info.makeTest(); // you have to call it

const {border, bj} = info.colors; // destructirisation of object, you take objects from object inside of it

console.log(border);



