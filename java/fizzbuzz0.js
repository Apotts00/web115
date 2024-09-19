document.addEventListener("DOMContentLoaded", function () {
document.getElementById("name-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Collecting user inputs
    const firstName = document.getElementById("first-name").value;
    const middleInitial = document.getElementById("middle-initial").value;
    const lastName = document.getElementById("last-name").value;

    // Create full name
    const fullName = `${firstName} ${middleInitial ? middleInitial + "." : ""} ${lastName}`.trim();

    // Update the welcome message
    document.getElementById("welcome-message").innerText = `Welcome to Paws & Pints Pub, ${fullName}!`;
    
    // Prompt the user to enter a number between 1 and 125
    let numberInput = prompt(`How high do you want to count, ${firstName} ?`);

    // Validate the number input
    while (numberInput < 1 || numberInput > 125 || isNaN(numberInput)) {
        numberInput = prompt("Invalid input. Please enter a number between 1 and 125:");
    }
    
    // Logic for the number input
    let numberOutput = "";
    
    for (let i = 1; i <= numberInput; i++) {
        
        if (i % 2 === 0) {
            numberOutput += `${i}. Happy Hour Drinks - This number is Even<br>`;
        } else {
            numberOutput += `${i}. Happy Hour Drinks - This number is Odd<br>`;
        }
    }

   
