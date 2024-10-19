// Get references to all the necessary elements
let numbercounter = document.querySelectorAll('.numbercounter');
let text = document.querySelectorAll('.text');
let countText = document.querySelectorAll('.countText');

// Function to add the number from input and update the corresponding <p> tag
let numberAdd = (item) => {
    let targetValue = numbercounter[item].value; // Get the input value
    if (targetValue) {
        // Update the <h1> to reflect the input value and store it in dataset
        countText[item].innerHTML = 0;  // Reset the counter to 0
        countText[item].dataset.number = targetValue; // Store the target number
        text[item].innerHTML = targetValue;  // Update the <p> tag to show the target value
    }
    numbercounter[item].value = ''; // Clear the input field after adding
}

// Function to start counting when the 'Count' button is pressed
let count = () => {
    countText.forEach((item, index) => {
        let targetNumber = parseInt(item.dataset.number, 10); // Get the target number from the dataset
        let currentNumber = 0; // Start the count from 0

        if (isNaN(targetNumber) || targetNumber <= 0) {
            // If the target number is not valid, skip this counter
            return;
        }

        // Define the counting logic with setInterval
        let interval = setInterval(() => {
            currentNumber++;  // Increment the counter
            item.innerHTML = currentNumber;  // Update the displayed number
            if (currentNumber >= targetNumber) {
                clearInterval(interval);  // Stop counting when the target is reached
            }
        }, 50); // 100ms interval for counting speed
    });
}



