document.getElementById("reset").onclick = function reset() {
    document.getElementById("greeting").textContent = "Let's go again!";
    document.getElementById("output").textContent = '';
};

document.getElementById("name-form").onsubmit = function greetUser(submit) {
    submit.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const middleInitial = document.getElementById("middle-initial").value;
    const lastName = document.getElementById("last-name").value;

    // Check if the first name or last name is empty
    if (!firstName || !lastName) {
        return;
    }

    // Construct full name
    const fullName = middleInitial ? `${firstName} ${middleInitial}. ${lastName}` : `${firstName} ${lastName}`;

    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = `Welcome to Forever Friends!, ${fullName}!`;

    const output = document.getElementById('output');
    output.textContent = ''; // Clear previous output
    
    const word5 = 'Forever';
    const mainword = 'Friend';  // Correct variable name for the main word
    const countLimit = 140;

    // Loop through numbers 1 to 140 to apply FizzBuzz logic
    for (let count = 1; count <= countLimit; count++) {
        let listItem = document.createElement('li');

        // Check conditions for divisible by 3, 5, or both
        if (count % 3 === 0 && count % 5 === 0) {
            listItem.textContent = `${mainword} ${word5}`;  // Main word + Forever
        } else if (count % 3 === 0) {
            listItem.textContent = `${mainword}`;  // Only Friend
        } else if (count % 5 === 0) {
            listItem.textContent = `${word5}`;  // Only Forever
        } else {
            listItem.textContent = `${mainword}`;  // Default is Friend
        }

        output.appendChild(listItem);
    }
};
