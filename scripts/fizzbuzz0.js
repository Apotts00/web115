document.getElementById("reset").onclick = function reset() {
    document.getElementById("greeting").textContent = "Let's go again!";
    document.getElementById("output").textContent = '';
};

document.getElementById("form").onsubmit = function greetUser(submit) {
    submit.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const middleInitial = document.getElementById("middle-initial").value;
    const lastName = document.getElementById("last-name").value;
    const greeting = document.getElementById("greeting");
    const loop = document.getElementById("loop");

    if (!firstName || !lastName) {
        alert("Please enter your first and last name.");
        return;
    }

    let count;
    while (true) {
        count = prompt(`How high do you want to count, ${firstName}?`);
        if (count === null) return;
        count = Number(count);
        if (!isNaN(count) && count > 0) break;
        alert("Please enter a valid positive number.");
    }
    
    const fullName = middleInitial ? `${firstName} ${middleInitial}. ${lastName}` : `${firstName} ${lastName}`;
    
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = `Welcome to Forever Friends, ${fullName}!`;



    const outputList = document.getElementById("output");
    outputList.textContent = "";

    for (let x = 1; x <= count; x++) {
        // Create a new list item
        const listItem = document.createElement("li");
        listItem.textContent = `Forever Friend - ${x % 2 === 0 ? "the number is even" : "the number is odd"}`;

        
        outputList.appendChild(listItem); 
    }
};
