/* 
 Aaron
 Lab 17
 September 3, 2025
*/

let baseFare = Number(prompt("Please enter the base fare:"));
let distanceTraveled = Number(
  prompt("Please enter the distance traveled in kilometers:")
);
let ratePerKm = Number(prompt("Please enter the rate-per-kilometer:"));
let additionalFees = Number(
  prompt("Please enter the total value of additional fees:")
);

let totalFare = baseFare + additionalFees + distanceTraveled * ratePerKm;

let result = `Your total fare is $${totalFare}.`;
alert(result);
