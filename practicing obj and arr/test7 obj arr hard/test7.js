'use strict'

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    const {shops, height, moneyPer1m3, budget} = data; // destructirizaciya for obj to be able to get obj inside

    let sumMalls = 0;   // sum for width and height miltiplied and added inside 

    for(let i = 0; i < shops.length; i++) {
        sumMalls += shops[i].width * shops[i].length;  // loop where index goes form zero to amount of shops (0 - 4) and width multiplies by length  
    }

    const totalVolume = sumMalls * height; 
    const cost = totalVolume * moneyPer1m3; 
    if(cost > budget) {
        console.log(`Cost will be ${cost} and it is more than your budget: ${budget}.`);
    } else {
        console.log(`Cost will be ${cost} and you have enough budget for that: ${budget}.`)
    }
}

isBudgetEnough(shoppingMallData);




const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    let a = []; let b = []; let c = []; let rest = []; // arrays inside of students
    arr.sort(); // sort array students

    for(let i = 0; i < arr.length; i++) { // loop through all array
        if(i >= 0 && i < 3) { // sorting by idnex
            a.push(arr[i]); // pushing 
        } else if(i >= 3 && i < 6) { // sorting by idnex
            b.push(arr[i]); // pushing 
        } else if(i >= 7 && i < 10) { // sorting by idnex
            c.push(arr[i]); // pushing 
        } else {
            rest.push(arr[i]); // pushing 
        }
    }

    return [a, b, c, `The rest of the students: ${rest.length === 0 ? "-" : rest.join(", ")}`] 
}

console.log(sortStudentsByGroups(students));