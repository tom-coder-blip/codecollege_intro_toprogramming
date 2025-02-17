// declare globals
var money = 20;
var lunches = 0;
var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//display lunch budget
document.getElementById("money").innerHTML = money;

//listen for order
// orderButton = document.getElementById("placeOrder");
// orderButton.addEventListener("click", buyLunches);

document.getElementById("placeOrder").addEventListener("click", buyLunches);


/*
buys specified number of sandwiches per day at current prices
*/
function buyLunches() {
    resetForm();
    var i = 0;
    while (money > 0 && i < daysOfWeek.length) {
        var priceToday = getSandwichPrice();
        var numberOfSandwiches = document.getElementById("numSandwiches").value;
        var totalPrice = priceToday * numberOfSandwiches;


        if (money >= totalPrice) {
            money = money - totalPrice;
            lunches++;
            document.getElementById("receipt").innerHTML += "<p>On " + daysOfWeek[i] + ", sandwiches are: $" + priceToday + ". You have $" + money.toFixed(2) + " left.</p>";
            console.log(daysOfWeek[i]);

        } else {
            document.getElementById("receipt").innerHTML += "<p>Today, sandwiches are: $" + priceToday + ". You don't have enough money. Maybe your sister will give you some of her sandwich.</p>";
            money = 0;
        }
        i++;

    }
    document.getElementById("receipt").innerHTML += "<p>You bought " + lunches + " lunches this week.</p>";

}

/*
gets the current price of sandwiches
*/
function getSandwichPrice() {
    var sandwichPrice = (Math.random() * (1 - 0) + 1).toFixed(2);
    return sandwichPrice;
}

/*
resets the game so that a new order can be placed
*/
function resetForm() {
    money = 20;
    lunches = 0;
    document.getElementById("receipt").innerHTML = "";

}