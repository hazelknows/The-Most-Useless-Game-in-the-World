document.addEventListener("DOMContentLoaded", function () {
    const clickSound = new Audio("assets/click.mp3");

    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
            clickSound.currentTime = 0; // Reset sound in case of rapid clicks
            clickSound.play();
        });
    });
});
