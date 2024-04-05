// ChatGPT wrote this. I asked it to write a bunch of functions to demonstrate the usage of functions in JavaScript.

// Function to calculate the square of a number
function square(x) {
    return x * x;
}

// Function to check if a number is even or odd
function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
}

// Function to find the maximum of two numbers
function findMax(a, b) {
    return a > b ? a : b;
}

// Function to generate a random number between two given numbers
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to print a multiplication table
function printMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} * ${i} = ${num * i}`);
    }
}

// Function to print a pattern
function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
      let pattern = "";
      for (let j = 1; j <= i; j++) {
        pattern += "* ";
      }
      console.log(pattern);
    }
}

// Main function to demonstrate the usage of above functions
function main() {
    console.log("Square of 5:", square(5));
    console.log("Is 7 even or odd?", checkEvenOrOdd(7));
    console.log("Max of 10 and 20:", findMax(10, 20));
    console.log("Random number between 1 and 100:", generateRandomNumber(1, 100));
    console.log("Multiplication table of 7:");
    printMultiplicationTable(7);
    console.log("Pattern:");
    printPattern(5);
}

// Call the main function
main();

function foo() {
    console.log('hello world');
}
