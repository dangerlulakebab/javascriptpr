const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(num => num < 250) 


console.log(randomNumbers)
console.log(smallNumbers)


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(word => word.length > 7)

console.log(favoriteWords)
console.log(longFavoriteWords)
