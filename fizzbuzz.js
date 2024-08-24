let integer = parseInt(prompt("enter num: "))

for(let cnt = 0 + 1; cnt <= integer; cnt++) {
    if (cnt % 3 == 0 && cnt % 5 == 0){
        console.log("FizzBuzz");
    } else if (cnt % 3 == 0){
        console.log("Fizz")
    } else if (cnt % 5 == 0){
        console.log("Buzz")
    }else {
        console.log(cnt);
    }
}
