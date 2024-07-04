/*


Adjusted Homework 2
Write a function that takes two numbers as arguments and returns their sum. Call the function and print the result to the console.

Write a function that takes a string as an argument and returns the string in uppercase without using .toUpperCase(). Call the function and print the result to the console.

Hint: You can convert characters to uppercase using their ASCII values.

Use an if...else statement to check if a number is even or odd. Print the result to the console.


*/



function numSum(num1, num2) {
    return num1 + num2;
}
console.log(numSum(1, 51))

function toUpper(str) {
    return str.toUpperCase();
}
console.log(toUpper('imgay'))

let num = 22

if (num / 2 === 0) {
    console.log(`the number ${num} is even`)
} else {
    console.log(`the number ${num} is odd`)
}
