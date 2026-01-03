document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        button.innerText = "Booked ✔";
        button.style.backgroundColor = "#4CAF50";
        button.style.transform = "scale(0.95)";
        setTimeout(() => {
            button.innerText = "Book Now";
            button.style.background = "linear-gradient(to right, #ff9800, #e68900)";
            button.style.transform = "scale(1)";
        }, 2000);
    });
});
