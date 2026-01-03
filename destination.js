document.addEventListener('DOMContentLoaded', () => {
    const followButtons = document.querySelectorAll('.follow');
    const bookButtons = document.querySelectorAll('.book-now');
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const cards = document.querySelectorAll('.service-card');
    
    followButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.textContent = button.textContent === 'Follow' ? 'Following' : 'Follow';
            button.classList.toggle('following');
        });
    });
    
    bookButtons.forEach(button => {
        button.addEventListener('click', () => {
            const destination = button.closest('.service-info').querySelector('h3').textContent;
            const price = button.closest('.service-info').querySelector('.price').textContent;
            alert(`Booking for ${destination} at ${price} will be confirmed soon!`);
        });
    });

    // Search functionality
    searchInput.addEventListener('input', filterDestinations);

    // Sort functionality
    sortSelect.addEventListener('change', sortDestinations);

    function filterDestinations() {
        const searchTerm = searchInput.value.toLowerCase();
        
        cards.forEach(card => {
            const destination = card.querySelector('h3').textContent.toLowerCase();
            card.style.display = destination.includes(searchTerm) ? 'block' : 'none';
        });
    }

    function sortDestinations() {
        const sortValue = sortSelect.value;
        const cardsArray = Array.from(cards);
        const container = document.querySelector('.services-grid');

        cardsArray.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.price').textContent.replace('$', ''));
            const priceB = parseFloat(b.querySelector('.price').textContent.replace('$', ''));
            const nameA = a.querySelector('h3').textContent;
            const nameB = b.querySelector('h3').textContent;

            switch(sortValue) {
                case 'price-low':
                    return priceA - priceB;
                case 'price-high':
                    return priceB - priceA;
                case 'name':
                    return nameA.localeCompare(nameB);
                default:
                    return 0;
            }
        });

        cardsArray.forEach(card => container.appendChild(card));
    }
});