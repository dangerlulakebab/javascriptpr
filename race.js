let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const raceAge = 33;

if (registeredEarly && raceAge >= 18) {
  raceNumber += 1000;
}

if (registeredEarly && raceAge > 18) {
  console.log(`Number ${raceNumber}, you will run at 9:30 am.`);
} else if (raceAge > 18 && !registeredEarly) {
  console.log(`Number ${raceNumber}, you will run at 11:00 am.`);
} else if (raceAge < 18) {
  console.log(`Number ${raceNumber}, you will run at 12:30 pm.`);
} else {
  console.log('Please see the registration desk!');
}
