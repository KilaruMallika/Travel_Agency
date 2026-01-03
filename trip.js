document.addEventListener("DOMContentLoaded", function () {
    const learnMoreBtn = document.querySelector(".learn-more");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const quizButton = document.getElementById("start-quiz");

    // Learn More Button
    learnMoreBtn.addEventListener("click", function () {
        alert("Learn more about exclusive trips and professional guides!");
    });

    // Dark Mode Toggle
    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        darkModeToggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    // Travel Quiz
    quizButton.addEventListener("click", function () {
        let answer = prompt("What type of trip do you prefer? (1: Adventure, 2: Relaxation, 3: Culture)");
        if (answer === "1") {
            alert("We recommend visiting the Swiss Alps!");
        } else if (answer === "2") {
            alert("A tropical beach in Bali is perfect for you!");
        } else if (answer === "3") {
            alert("Explore the historic streets of Rome!");
        } else {
            alert("Please select a valid option!");
        }
    });
});
