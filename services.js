document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.book-now');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const service = button.parentElement.querySelector('h3').textContent;
            alert(`Booking for ${service} service will be available soon!`);
        });
    });
});