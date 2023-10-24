'use strict'

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(obj) {
        const {age} = obj;   // recursiya
        const {languages} = obj.skills; //recursiya
        let str = `I am ${age} and I speka those languages: `;

        languages.forEach(function(lang) {  // .forEach through array and to upperCase added to string
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {  // recursiya
    const {exp} = plan.skills;
    return exp;
}
console.log(showExperience(personalPlanPeter));


function showProgrammingLangs(plan) {    // {obj.name} = way how to get to the object, recursiya
    let langs = '';
    const {programmingLangs} = plan.skills;
    for(let key in programmingLangs) {
        langs += `${[key]} is learned by ${programmingLangs[key]}\n`;
    }
    return langs;
}

console.log(showProgrammingLangs(personalPlanPeter));

function showProgrammingLangs(plan) { //almost done function that goes through array and tries to find progLangs
    for(let key in plan) {
        if(typeof(plan[key]) === 'object') {
            for(let i in plan[key]) {
                if(typeof(plan[key][i]) === 'object') {
                    for(let j in plan[key][i]) {
                        console.log(`${j} is learned in ${plan[key][i][j]}`);
                    }
                }
            }
        }
    }
}

showProgrammingLangs(personalPlanPeter);