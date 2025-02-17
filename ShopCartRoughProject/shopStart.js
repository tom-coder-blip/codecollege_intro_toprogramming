// These variables store data about the items and track the order details.
// nums: Stores unique numbers for each item.
// items: Stores the names of the products.
// prices: Stores the price of each product.
// quantities: Stores how many of each product the user has selected.
// totals: Stores the total price for each product (price × quantity).
// totalOrderAmt: Stores the grand total of all selected items.
var nums = [1, 2, 3, 4];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];
var prices = [7.5, 9.5, 8.5, 7.5];
var quantities = [0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;

// This function is triggered when the user clicks the "Add" button to select an item.
// x is the index of the selected item (e.g., 0 for "Coke", 1 for "Kit Kat").
// It updates:
// quantities[x]: Increases the count of the selected item.
// totals[x]: Recalculates the total price for that item.
// totalOrderAmt: Adds the item's price to the overall total.
function add_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] + 1; // Increase the quantity of the selected item
    totals[x] = prices[x] * quantities[x]; // Calculate total price for this item
    totalOrderAmt += prices[x]; // Update the grand total

    // Calls display_all() to update the table with new values.
    display_all(); // Refresh the table to reflect the changes
}


 

//This function generates and updates the shopping table dynamically.

function display_all() {


// This defines a table structure with the following columns:
// Num: The item number.
// Item: The product name.
// Price: The cost per item.
// Quantity: How many the user has selected.
// Total: The total cost for each item.
// Add: A button to add more items.
    var myTable = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    
    //This loops through all items and adds a row (<tr>) for each.
    //The Add buttons trigger add_selection(i) to update the selected item.
    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
    }

    myTable += "</table>";
    // myTable += "<br/><br/><p>Total: " + totalOrderAmt + "</p>";



    // document.write(myTable);
    document.getElementById("demo").innerHTML = myTable;


}

window.onload = function() {
    display_all();
}