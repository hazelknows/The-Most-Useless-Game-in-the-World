document.addEventListener("DOMContentLoaded", function () {
    // Load the click sound
    const clickSound = new Audio("assets/click.wav"); 

    // Select all buttons
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            clickSound.currentTime = 0; // Reset sound in case of rapid clicks
            clickSound.play();
        });
    });
});
