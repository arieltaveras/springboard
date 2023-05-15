// ## **Given this function:**


// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }


// Refactor it to use the rest operator & an arrow function
/* Write an ES2015 Version */

function filterOutOdds() {
    const nums = Array.from(arguments);
    return nums.filter((num) => {
      return num % 2 === 0
    });
  }

//## **findMin**
// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.
// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

const findMin = function() {
    const args = Array.from(arguments);
    return args.reduce((findMin, currVal) => {
        return currVal < findMin ? currVal : findMin;
    });
}