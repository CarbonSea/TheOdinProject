# Javascript - Fundamentals Part 3

> This section is mainly about JavaScript Functions !

A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).

- Functions that are part of objects are called methods
- To actually use a function after it has been defined, you've got to run — or invoke — it. This is done by including the name of the function in the code somewhere, followed by parentheses.

Like this :  
function myFunction() {  
 alert("hello");  
}

myFunction();  
//calls the function once

- Some functions require parameters to be specified when you are invoking them — these are values that need to be included inside the function parentheses, which it needs to do its job properly.
-As an example, the browser's built-in Math.random() function doesn't require any parameters. When called, it always returns a random number between 0 and 1

- If you're writing a function and want to support optional parameters, you can specify default values by adding = after the name of the parameter, followed by the default value:
 Like this :    
 function hello(name = "Chris") {   
  console.log(`Hello ${name}!`);    
}   
hello("Ari"); // Hello Ari! 
hello(); // Hello Chris!    

### Function Scope : 
- When you create a function, the variables and other things defined inside the function are inside their own separate scope, meaning that they are locked away in their own separate compartments, unreachable from code outside the functions.

