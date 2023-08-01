const correctPassword = "1034";

function checkPassword() {
    const userInput = document.getElementById("passwordInput").value;
    
    const trimmedUserInput = userInput.trim();

    if (trimmedUserInput === correctPassword) {
        window.location.href = "stage2.html"; // Replace "next_page.html" with the URL of the next page or secret content
    } else {
        const messageElement = document.getElementById("message");
        messageElement.textContent = "Incorrect password. Try again.";
    }
}