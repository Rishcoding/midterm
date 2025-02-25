// Dark Mode Toggle
document.querySelectorAll("[data-bs-theme-value]").forEach(button => {
    button.addEventListener("click", function() {
        document.body.style.backgroundColor = this.getAttribute("data-bs-theme-value") === "dark" ? "#1e1e1e" : "#f8f9fa";
        document.body.style.color = this.getAttribute("data-bs-theme-value") === "dark" ? "white" : "black";
    });
});

// Factorial Calculation
document.addEventListener("DOMContentLoaded", function () {
    const inputBox = document.getElementById("numberInput");
    const enterButton = document.getElementById("enterButton");
    const resultScreen = document.getElementById("resultScreen");

    enterButton.addEventListener("click", function () {
        const number = parseInt(inputBox.value);
        if (isNaN(number) || number < 0) {
            resultScreen.textContent = "Please enter a valid number!";
            return;
        }

        let factorial = 1;
        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }

        resultScreen.textContent = `${number}! = ${factorial}`;
    });
});
