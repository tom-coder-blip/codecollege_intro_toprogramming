//Listing 15.1

// var myNumber = prompt("Enter your favorite day of the week!").toLowerCase();
// var theResponse;

// switch (myNumber) {
//     case "monday":
//         theResponse = "Ack!";
//         break;
//     case "tuesday":
//         theResponse = "Taco day!";
//         break;
//     case "wednesday":
//         theResponse = "Halfway there!";
//         break;
//     case "thursday":
//         theResponse = "It's the new Friday!";
//         break;
//     case "friday":
//         theResponse = "TGIF! Yeah!";
//         break;
//     case "saturday":
//         theResponse = "What a day!";
//         break;
//     case "sunday":
//         theResponse = "Sunday = Funday!";
//         break;
//     default:
//         theResponse = "I haven't heard of that one!";
//         break;
// }

// alert(theResponse);


var meal = prompt("Choose your meal by clicking the number assigned to it!");
var theResponse;

switch (meal) {
    case "1":
        theResponse = "Burgers and Chips";
        break;

    case "2":
        theResponse = "Vetkoek and chicken mayo";
        break;

    case "3":
        theResponse = "Pizza";
        break;

    case "4":
        theResponse = "Chicken Sandwich";
        break;

    case "5":
        theResponse = "Rice and curry";
        break;

    default:
        theResponse = "That is not available";
        break;

}

alert(theResponse);
