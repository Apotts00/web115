// Event listener for the form submission
const form = document.getElementById("name-form");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Collect form values
    const firstName = document.getElementById("first-name").value;
    const middleInitial = document.getElementById("middle-initial").value;
    const lastName = document.getElementById("last-name").value;

    // Get the greeting heading and update it
    const greeting = document.getElementById("greeting");
    greeting.textContent = `Welcome to Forever Friends! ${firstName} ${middleInitial ? middleInitial + '.' : ''} ${lastName}!`;

    // Prompt the user for a count number
    const count = parseInt(prompt(`How high do you want to count, ${firstName}?`), 10);
    if (isNaN(count) || count <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    // Output loop with even/odd logic
    const outputList = document.getElementById("output");
    outputList.innerHTML = ''; // Clear any existing output
    for (let i = 1; i <= count; i++) {
        const listItem = document.createElement("li");
        // Add even/odd message
        if (i % 2 === 0) {
            listItem.textContent = `Forever - the number is even`;
        } else {
            listItem.textContent = `Friend - the number is odd`;
        }
        outputList.appendChild(listItem);
    }
});

// Event listener for the reset button
document.getElementById("reset").onclick = function() {
    // Reset the greeting and clear the output list
    document.getElementById("greeting").textContent = "Let's play again!";
    document.getElementById("output").innerHTML = ''; // Clear the output list
    // Clear the form fields
    document.getElementById("first-name").value = '';
    document.getElementById("middle-initial").value = '';
    document.getElementById("last-name").value = '';
};



