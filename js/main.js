

// Prompts for what items user wants on their sandwich - to be calculated below
let sandwichBread = prompt("What kind of bread would you like? (white, wheat, flat.)");
let sandwichMeat = prompt("What kind of meat would you like? (Separate multiple choices with a comma.)");
let sandwichToppings = prompt("What toppings would you like? (Separate multiple choices with a comma.)");
let sandwichCondiments = prompt("What condiments would you like? (Separate multiple choices with a comma.)");


// The `prices` object below specifies the prices for each thing.
let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};

// Turns the information from String to Arrays dependig on user input for sandwich.
let meatArray = sandwichMeat.split(',');
let toppingArray = sandwichToppings.split(',');
let condimentArray = sandwichCondiments.split(',');


// Used to calculate amount of items chosen by the prices of each sandwich item. 
let meatCost = meatArray.length * prices.meat;
let toppingCost = toppingArray.length * prices.topping;
let condimentCost = condimentArray.length * prices.topping;

// Combined totals and costs to get subtotal
let subtotal = prices.sandwich + meatCost + toppingCost + condimentCost;

//  State tax rate calculated for final cost
let waStateTaxRate = 0.065;
let orderTax = subtotal * waStateTaxRate;

// Subtotal and Washington tax prices combined for total
let totalPrice = subtotal + orderTax;

// Calculating suggested tip percentages
let tenPercentTip = totalPrice * 0.10;
let fifteenPercentTip = totalPrice * 0.15;
let twentyPercentTip = totalPrice * 0.20; 

// Step Three //////////////////////////////////////////////////////////
//
// TODO: Now that we've calculated all the values, insert them into this
// template literal using proper expression tags. Note that we must provide
// all of the info the user gave us to confirm the order, and then we must also
// provide the cost information so the user understands their bill.

let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${sandwichBread}</p>
    <p>Meat: ${sandwichMeat}</p>
    <p>Toppings: ${sandwichToppings}</p>
    <p>Condiments:${sandwichCondiments}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: $${prices.sandwich.toFixed(2)}</p>
    <p class="text-right">Meat: $${meatCost.toFixed(2)}</p>
    <p class="text-right">Toppings: $${toppingCost.toFixed(2)}</p>
    <p class="text-right">Condiments: $${condimentCost.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $${subtotal.toFixed(2)}</p>
    <p class="text-right">Tax: $${orderTax.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right boldtext">Total: $${totalPrice.toFixed(2)}</p>
    <p>---------------------</p>
    <p class="text-center">Suggested Tip:</p> 
    <p class="text-center">10% = $${tenPercentTip.toFixed(2)}</p> 
    <p class="text-center">15% = $${fifteenPercentTip.toFixed(2)}</p>
    <p class="text-center">20% = $${twentyPercentTip.toFixed(2)}</p>
    
`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
