/* 
 Aaron
 Lab 16
 September 2, 2025
*/
let billAmount = Number(prompt("What is your bill amount?"));
let tipPercentage = Number(prompt("What percentage would you like to tip?"));
billAmount = billAmount + (billAmount * tipPercentage) / 100;
alert("Your bill total including tip is " + billAmount + ".");
