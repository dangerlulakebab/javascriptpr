/*Your Task
Practice writing conditional statements (if, else if, else) with different conditions.
Experiment with logical operators (&&, ||, !) to create complex checks.
Create scenarios where combining conditions helps in decision-making.*/


let age = 18;
let hasDriverLicence = true;

if (age >= 18 && hasDriverLicence === true) {
    console.log('You are eligble to drive!')
} else {
    console.log('you can not drive.')
}


let day = 'sunday';

if (day === 'sunday' || day === 'saturday') {
    console.log('ITS the WEEKED!')
}else {
    console.log('its work day :(')
}

let isRaining = true;

if (!isRaining) {
    console.log('no needed an umbrella')
} else {
    console.log('make sure to take a umbrella!')
}
