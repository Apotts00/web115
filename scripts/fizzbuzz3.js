// Function to check if a number is divisible by a divisor
function checkDivision(num, divisor) {
    return num % divisor === 0;
}

// Define divisors and their corresponding output labels
const divisors = [
    { divisor: 3, output: "Fizz" },
    { divisor: 5, output: "Buzz" },
    { divisor: 7, output: "Bang" }
];

// Function to generate the FizzBuzz string for a given number
function generateFizzBuzz(num) {
    let result = '';  // Start with an empty string

    // Check divisibility for each divisor
    divisors.forEach(divisorObj => {
        if (checkDivision(num, divisorObj.divisor)) {
            result += divisorObj.output;  // Append corresponding output if divisible
        }
    });

    // If no divisibility is found, return the number itself
    return result || num;
}

// Test the FizzBuzz logic with a range of numbers
const maxCount = 105;  // Test up to 105

for (let iCounter = 1; iCounter <= maxCount; iCounter++) {
    console.log(generateFizzBuzz(iCounter));
}
