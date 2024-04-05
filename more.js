// ChatGPT wrote this as an example
// Function to check if a number is prime
function isPrime(number) {
    if (number <= 1) {
      return false;
    } else if (number === 2) {
      return true;
    } else {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    }
}

// Function to generate Fibonacci sequence up to a given limit
function generateFibonacci(limit) {
    let sequence = [0, 1];  
    while (
      sequence[sequence.length - 1] + sequence[sequence.length - 2] <=
      limit
    ) {
      sequence.push(
        sequence[sequence.length - 1] + sequence[sequence.length - 2]
      );
    }
    return sequence;
}

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to convert temperature from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

// Function to calculate factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
}

// Function to print numbers from 1 to n, replacing multiples of 3 with "Fizz",
// multiples of 5 with "Buzz", and multiples of both 3 and 5 with "FizzBuzz"
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
}

// Main function to demonstrate the usage of above functions
function main() {
    console.log("Is 13 prime?", isPrime(13));
    console.log("Fibonacci sequence up to 100:", generateFibonacci(100));
    console.log('Reverse of "hello":', reverseString("hello"));
    console.log("20 Celsius is", celsiusToFahrenheit(20), "Fahrenheit");
    console.log("Factorial of 5 is", factorial(5));
    console.log("FizzBuzz up to 15:");
  fizzBuzz(15);
}

// Call the main function
main();
