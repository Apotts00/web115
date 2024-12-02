// Function to check if one number is divisible by another
function checkDivision(num1, num2) {
    return num1 % num2 === 0;
}

// FizzBuzz logic
const firstDivisor = 3;   // Divisor 1 (can be changed)
const secondDivisor = 5;  // Divisor 2 (can be changed)
const maxCount = 100;     // Max number to check

for (let iCounter = 1; iCounter <= maxCount; iCounter++) {
    // Check divisibility by both numbers using the checkDivision function
    if (checkDivision(iCounter, firstDivisor) && checkDivision(iCounter, secondDivisor)) {
        console.log("FizzBuzz");
    } else if (checkDivision(iCounter, firstDivisor)) {
        console.log("Fizz");
    } else if (checkDivision(iCounter, secondDivisor)) {
        console.log("Buzz");
    } else {
        console.log(iCounter);
    }
}
