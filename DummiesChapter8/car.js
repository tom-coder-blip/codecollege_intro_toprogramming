// Operands are the values on which operators perform operations. For example, in the expression 65 + 10, both 65 and 10 are operands, and + is the operator.
// In JavaScript, operands can be variables, literals, or expressions.
// var number1 = 65;
// var number2 = 10;
// var sum = number1 - number2;
// console.log(sum);




// Objects in JavaScript are collections of properties, where a property is an association between a name (or key) and a value.
// Objects are created using curly braces {}. Inside the braces, properties are defined as key-value pairs.
// typeof checks the data type of the value attached to your property
// var man = {
//     name: "Moses",
//     age : 48,
//     jobtitle : "Software Developer",
//     Marriagestatus : "Married",
//     Country : "South Africa",
// };

// console.log(typeof man);




//DREAMCAR CODE/PROGRAM
var dreamCar = {
    model: "98",
    color: "brown",
    year: 1988,
    bodyStyle: "LuxuryCar",
    price: 19000,
    carBrand: "Hyundai"
};

document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("pricetag").innerHTML = dreamCar.price;

document.getElementById("body").innerHTML = dreamCar.carBrand + " " + dreamCar.model;