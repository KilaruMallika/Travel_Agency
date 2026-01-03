document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let destination = document.getElementById("destination").value;
    let guests = document.getElementById("guests").value;
    let arrival = document.getElementById("arrival").value;
    let leaving = document.getElementById("leaving").value;
    alert(`Booking Details:\nDestination: ${destination}\nGuests: ${guests}\nArrival: ${arrival}\nLeaving: ${leaving}`);
});
