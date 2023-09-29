# Javascript Basics - Foundation

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
___

Q) 