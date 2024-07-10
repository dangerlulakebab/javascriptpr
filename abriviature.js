let words = ['Chicked', 'Bacon', 'Onion'] // word for the abriviature

const abr = words.map((word) => {
    return word[0] // return first letter of each word
})

console.log(abr.join()) // print the result nick ga
