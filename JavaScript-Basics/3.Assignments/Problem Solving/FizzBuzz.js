function getFB(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz" + " - " + i);
    else if (i % 3 === 0) console.log("Fizz" + " - " + i);
    else if (i % 5 === 0) console.log("Buzz" + " - " + i);
    else console.log(i);
  }
}

let num = +prompt("Please enter your number ?");
console.log(getFB(num));
