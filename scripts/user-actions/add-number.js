"use strict";
console.log("--- loading: add number");
debugger;
const addNumberHandler = () => {
  console.log("\n--- calling: add number handler");

  const userInput = prompt("enter a number to add:");
  console.log("userInput:", typeof userInput, "\n", userInput);
  if (userInput === null || userInput === "") {
    return;
  }

  const userNumber = Number(userInput);
  console.log("userNumber:", typeof userNumber, "\n", userNumber);
  if (isNaN(userNumber)) {
    alert(`${userInput} is not a valid number`);
    return;
  }

  console.log("numbers (before):", typeof numbers, "\n", numbers);
  // add the user's number to the main shared array of numbers
  numbers.push(userNumber);
  console.log("numbers (after):", typeof numbers, "\n", numbers);

  displayArrayHandler();
};
