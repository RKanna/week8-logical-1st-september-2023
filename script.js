"use strict";

//Set-2

//1. Write a JavaScript program to find all the unique values in a set of numbers.

function findUniqueValues(arr) {
  let uniqueValues = [];
  arr.forEach(function (value) {
    if (uniqueValues.indexOf(value) === -1) {
      uniqueValues.push(value);
    }
  });
  return uniqueValues;
}
let dataOne = [1, 2, 2, 3, 4, 4, 5];
let dataTwo = [1, 2, 3, 4, 5];
let dataThree = [1, -2, -2, 3, 4, -5, -6, -5];
console.log(findUniqueValues(dataOne));
console.log(findUniqueValues(dataTwo));
console.log(findUniqueValues(dataThree));

//2.Write a JavaScript program to check if a given number is positive, negative, or zero.

const checkNumber = (num) =>
  num === 0 ? "Zero" : num > 0 ? "Positive" : "Negative";
console.log(checkNumber(5));
console.log(checkNumber(-2));
console.log(checkNumber(0));

//3.Write a JavaScript program to find the sum of all the numbers in an array.

function findSum(arr) {
  return arr.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);
}
console.log(findSum([1, 2, 3, 4, 5]));

//4.Write a program that converts a time in 12-hour format to 24-hour format.
//Sample Input: const time12Hour = &quot;03:45 PM&quot;;
function timeConvert(timeFullString) {
  const [time, period] = timeFullString.split(" ");
  const [hours, minutes] = time.split(".");
  let hoursVariable = parseInt(hours, 10);
  const minutesVariable = parseInt(minutes, 10);
  const periodVariable = period;
  //   if (periodVariable === "PM" && hoursVariable >= 1 && hoursVariable <= 11) {
  //     const convertedHours = (hoursVariable += 12);
  //     console.log(`${convertedHours}:${minutesVariable}`);
  //   } else {
  //     console.log(`${hoursVariable}:${minutesVariable}`);
  //   }
  const convertedHours =
    periodVariable === "PM" && hoursVariable >= 1 && hoursVariable <= 11
      ? hoursVariable + 12
      : hoursVariable;
  console.log(`${convertedHours}:${minutesVariable}`);
}
timeConvert("03.45 PM");

//5.Create a "Scroll to Top" button that appears when the user scrolls down and takes them to the top of the page when clicked.
document.addEventListener("DOMContentLoaded", function () {
  function scrollToTop() {
    const btnEle = document.getElementById("btn");
    window.onscroll = function () {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        btnEle.style.display = "flex";
      } else {
        btnEle.style.display = "none";
      }
    };
    btnEle.addEventListener("click", function () {
      document.documentElement.scrollTop = 0;
    });
  }
  scrollToTop();
});

//6.Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.

let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let num3 = Number(prompt("Enter the third number:"));

let firstValue, secondValue, thirdValue;

thirdValue =
  num1 >= num2 && num1 >= num3
    ? num1
    : num2 >= num1 && num2 >= num3
    ? num2
    : num3;
firstValue =
  num1 <= num2 && num1 <= num3
    ? num1
    : num2 <= num1 && num2 <= num3
    ? num2
    : num3;
secondValue = num1 + num2 + num3 - firstValue - thirdValue;

alert("Sorted numbers: " + thirdValue + ", " + secondValue + ", " + firstValue);

//7.Write a JavaScript program to reverse a string without using the built-in reverse() method.
function reverseString(str) {
  const reversedString = str.split("").reverse().join("");
  console.log(reversedString);
}
console.log(reverseString("Hello"));

//8.Write a program that takes an object, creates a copy of it, and extends it with new properties using the spread syntax.

const originalObj = { name: "John", age: 30 };
const extendedObj = {
  ...originalObj,
  city: "New York",
  profession: "Engineer",
};
console.log("Extended Object:", extendedObj);

//9.Write a program that validates user input and provides feedback or defaults..

function processInput(userInput) {
  const trimmedInput = userInput.trim();

  if (trimmedInput === "") {
    return "No valid input provided.";
  }
  return `Processed Input: "${trimmedInput}"`;
}
const userInput = "   ";
const result = processInput(userInput);
console.log(result);

//10.Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.

function findSignOfNumber(num) {
  if (num > 0) {
    console.log(`The sign is "+"`);
  } else if (num < 0) {
    console.log(`The sign is "-"`);
  }
}
findSignOfNumber(3);
findSignOfNumber(-7);
findSignOfNumber(2);
