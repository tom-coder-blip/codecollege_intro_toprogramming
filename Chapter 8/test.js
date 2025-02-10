// //CREATING A SIMPLE FUNCTION

// function greetUser() {
//     console.log("Welcome to our website!");
// }

// function addNumbers(a, b) {
//     return a + b;
// }

// function celsiusToFahrenheit(celsius){
//     return (celsius * 9/5) + 32;
// }


// CALLING A FUNCTION
// TO EXECUTE OR CALL A FUNCTION, WE WRITE ITS NAME FOLLOWED BY PARENTHESES

// var welcoming = function greet(){
//     console.log("Hello! Welcome to Javascript");
// }
// greet();

// function addNumbers(a, b){
//     return a + b;
// }
// console.log(addNumbers(5, 10));


// //PASSING ARGUMENTS INTO FUNCTIONS
// //FUNCTIONS CAN TAKE PARAMETERS TO ACCEPT INPUT VALUES

// function addNumbers(a, b){
//     console.log("The sum is: " + (a + b));
// }

// addNumbers(5, 10);
// addNumbers(7, 3);


//PASSING MULTIPLE ARGUMENTS TO A FUNCTION

// var printMultipleTimes = function (howManyTimes, whatToDraw) {
//     for (var i = 0; i < howManyTimes; i++) {
//     console.log(i + " " + whatToDraw);
//     }
//    };


// //RETURNING VALUES FROM FUMCTIONS
// //Instead of just printing results, a function can return a value using the return keyword.
// //The return statement in JavaScript is used inside a function to send a value back to where the function was called. When a return statement is executed, the function stops running and returns the specified value.

// function add(x, y){
//     return x + y;
// }

// var sum = add(10, 5);
// console.log(sum);


// //A FUNCTION CAN RETURN A RANDOM WORD
// var pickRandomWord = function (words) {
//     return words[Math.floor(Math.random() * words.length)];
//    };


// var eatFavouriteFood = function (myFavouriteFood){
//     console.log("Lets eat " + myFavouriteFood);
// };

// eatFavouriteFood("Burger");
// eatFavouriteFood("Lazania");
// eatFavouriteFood("Banana Bread");


