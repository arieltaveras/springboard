//let and const Exercise

//ES5 GLOBAL CONSTANTS
var PI = 3.14;
PI = 42; // stop me from doing this!

//ES2015 GLOBAL CONSTANTS
/* Write an ES2015 Version */
const PI = 3.14
if(true){
    const PI = 42
    console.log(PI);
}

// Quiz
// What is the difference between var and let?
// var can be reassigned and redeclared but let can’t be redeclared.

// What is the difference between var and const?
// var can be reassigned and redeclared but const can’t be reassigned and redeclared.

// What is the difference between let and const?
// let can be reassigned but not redeclared and const can’t be reassigned or redeclared.

// What is hoisting?
// When using var hoisting would call the variable name and undefined value before it is used in the code.