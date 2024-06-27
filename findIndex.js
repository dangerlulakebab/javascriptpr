const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

let neededAnimal = 'elephant';

const foundAnimal = animals.findIndex(animal => animal === neededAnimal);
console.log(`The needed animal ${neededAnimal} is at index of: ` + foundAnimal + " " + animals[foundAnimal]);

let letterOfAnimal = 's';

const startsWith = animals.findIndex(animal => animal[0] === letterOfAnimal); // s
console.log(`Animal with starting letter of ${letterOfAnimal} is at index of: ` + startsWith + " " + animals[startsWith]);
