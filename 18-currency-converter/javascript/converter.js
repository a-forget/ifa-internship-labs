/* 
 Aaron
 Lab 18
 September 5, 2025
*/
let usdAmount = Number(prompt("Please enter an amount in USD:"));

// Exchange rates
// Today's exchange rate
let currentExchangeRate = 1.3829;
// Yesterday's exchange rate
let previousExchangeRate1 = 1.3794;
// The exchange rate 7 days ago
let previousExchangeRate2 = 1.3742;

// Calculations
let currentCadAmount = usdAmount * currentExchangeRate;

let previousCadAmount1 = usdAmount * previousExchangeRate1;

let previousCadAmount2 = usdAmount * previousExchangeRate2;

// Comparisons
let amountCompared;
if (currentCadAmount > previousCadAmount1) {
  amountCompared = "\n\nThis CAD value is higher than yesterday";
} else {
  amountCompared = "\n\nThis CAD value is lower than yesterday";
}

let ratesCompared;
if (currentExchangeRate > previousExchangeRate1) {
  ratesCompared = " because the exchange rate is higher today than yesterday.";
} else {
  ratesCompared = " because the exchange rate is lower today than yesterday.";
}

// Concatenation
let cadModulo1 = currentCadAmount % previousCadAmount1;
let cadModulo2 = currentCadAmount % previousCadAmount2;

let message =
  `Your USD are worth $${currentCadAmount} CAD today.` +
  amountCompared +
  ratesCompared +
  `\n\n\nYesterday your USD would have been worth $${previousCadAmount1} CAD.` +
  `\nThat is a difference of $${cadModulo1} from today.` +
  `\n\nA week ago your USD would have been worth $${previousCadAmount2} CAD, for a difference of $${cadModulo2}.`;
alert(message);

// "...display the original USD amount, both converted CAD amounts, and the comparison results in the browser console."
console.log(
  `The user entered $${usdAmount} USD.` +
    `\n\nToday's CAD amount is $${currentCadAmount}.` +
    `\n\nThe difference between today's last week's CAD amounts is $${cadModulo2}.` +
    amountCompared +
    ratesCompared +
    `\n\nYesterday's CAD amount would have been $${previousCadAmount1}.` +
    `\n\nThe difference between today's and yesterday's CAD amounts is $${cadModulo1}.` +
    `\n\nLast week's CAD amount would have been $${previousCadAmount2}.` +
    `\n\nThe difference between today's last week's CAD amounts is $${cadModulo2}.`
);
