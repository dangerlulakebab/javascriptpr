var myAge = 14
var earlyYears = 2;
earlyYears *= 10.5; // First two years count as 10.5 dog years each

var laterYears = myAge - 2; // Remaining years after the first two
laterYears *= 4; // Each of these years count as 4 dog years

var myAgeInDogYears = earlyYears + laterYears;

console.log(`Your age ${myAge} in dog years would be: ${myAgeInDogYears}.`);