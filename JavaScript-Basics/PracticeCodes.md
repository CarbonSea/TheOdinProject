# Javascript Basics - Foundation

### Gists

Q) Write an if condition to check that age is between 14 and 90 inclusively. "Inclusively” means that age can reach the edges 14 or 90.

```
let age = 23;
if (age >= 14 && age<=90) {
alert("Yes!");
}
```

Q) Write an if condition to check that age is NOT between 14 and 90 inclusively. Create two variants: the first one using NOT !, the second one – without it.
let age = 23;
if (!(age >= 14 && age<=90)) {
alert("Yes!");

```
}
let age = 23;
if (age > 14 || age<90) {
alert("Yes!");
}
```

### Conditional Branching :

Q) The name of JavaScript

Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

```
let name = prompt("What's the official name of JavaScript","");

(name=="ECMAScript")? alert("Right") : alert("Wrong");
```

---

Q) Write a code which asks for a login with prompt ?

If the visitor enters `"Admin"`, then `prompt` for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

- If it equals “TheMaster”, then show “Welcome!”,
- Another string – show “Wrong password”,
- For an empty string or cancelled input, show “Canceled”

```
let username = prompt("Whats your name?",'');
if (username === "Admin")
  {
    let pass = prompt("Please enter your password : ",'');

    if (pass === "TheMaster"){
      alert("Welcome");
          }
    else if (pass === "")
      {
        alert("Empty String! Please redo again ... ");
      }
    else {
      alert("Incorrect details");
    }
  }
else if (username === ""){
  alert("Canceleld!")
}
else {
  alert("I don't know you ... ");
}
```

---

Q) Show the sign
Using if..else, write the code which gets a number via prompt and then shows in alert:

1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number.

```
let num = prompt("Please type your prompt ?", "");
Number(num);

if (num > 1) {
  alert(1);
}
else if (num < 0) {
  alert(-1);
}
else if (num == 0)
{
  alert("0")
}

else {
  alert("Error");
}
```

---

Q) Rewrite 'if' into '?'
Rewrite this if using the conditional operator '?':

let result;
if (a + b < 4) {
result = 'Below';
} else {
result = 'Over';
}

```
let result = (a=b<4) ? "below" : "over";
```

---

Q) Rewrite 'if..else' into '?'
Rewrite if..else using multiple ternary operators '?'.
For readability, it’s recommended to split the code into multiple lines.

let message;
if (login == 'Employee') {
message = 'Hello';
} else if (login == 'Director') {
message = 'Greetings';
} else if (login == '') {
message = 'No login';
} else {
message = '';
}

```
let message;
let login = prompt("Whats your designation ?","");

message = (login == "Employee")? "Hello" :
          (login=="Director")? "Greetings" :
          (login == '') ? "No login " : "Error!!";

alert(message);
```

---

### The "switch" statement

Q) Rewrite the "switch" into an "if"

Write the code using if..else which would correspond to the following switch :

switch (browser) {
case 'Edge':
alert( "You've got the Edge!" );
break;

case 'Chrome':
case 'Firefox':
case 'Safari':
case 'Opera':
alert( 'Okay we support these browsers too' );
break;

default:
alert( 'We hope that this page looks ok!' );
}

```
let browser = prompt("Enter value?","");
if (browser == "Edge") {
  alert("You have Edge");
}
else if (browser == "Opera" | browser === "Chrome"| browser=="Safari"|browser=="Firefox") {
  alert("Okay we support these browsers too");}

else {
  alert("We hope that this page looks ok!");
}
```

---

Q) Rewrite "if" into "switch"
Rewrite the code below using a single switch statement:

let a = +prompt('a?', '');

if (a == 0) {
alert( 0 );
}
if (a == 1) {
alert( 1 );
}

if (a == 2 || a == 3) {
alert( '2,3' );
}

```
let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert(0);
    break;

  case 1:
    alert(1);
    break;

  case 2:
  case 3:
    alert("2 or 3");
    break;

  default :
    alert("Check again");
    break;

}
```
___

