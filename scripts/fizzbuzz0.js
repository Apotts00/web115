document.getElementById("name-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = document.getElementById("first-name").value.trim();
    let middleInitial = document.getElementById("middle-initial").value.trim();
    let lastName = document.getElementById("last-name").value.trim();
    const outputBox = document.getElementById("fizzbuzz-output-box");
 
    if (!firstName || !lastName) {
        alert("First Name and Last Name are required!");
        return;
    }


    let greetingMessage = `Welcome to Jumpy Tarantula, ${firstName} ${middleInitial ? middleInitial + "." : ""} ${lastName}!`;
    document.getElementById("greeting").innerText = greetingMessage;


    function generateFizzBuzz() {
        // First, make the output box visible
        outputBox.style.display = "block";
        
        // Clear any existing content
        outputBox.innerHTML = "";
        
        // Create an ordered list to hold the fizzbuzz items
        const fizzBuzzList = document.createElement("ul");
        fizzBuzzList.id = "fizz-buzz-list";
    
    for (let i = 1; i <= 125; i++) {
        let listItem = document.createElement("li");
        let result = " Forever Friends Soft Play";

        if (result === "") result = i;

       
        listItem.innerHTML = `<span class="fizzbuzz-number">${i}.</span>${result}`;
        fizzBuzzList.appendChild(listItem);
    }
    

    outputBox.appendChild(fizzBuzzList);
}

generateFizzBuzz();
});
