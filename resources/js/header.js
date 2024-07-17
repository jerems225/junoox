 document.addEventListener('DOMContentLoaded', function() {
    const openCardIcon = document.getElementById('openCardIcon');
    const openCardIcon2 = document.getElementById('openCardIcon2');
    const roundedCard = document.querySelector('.rounded-card');

    // Function to toggle the visibility of the card
    const toggleCard = function(event) {
        roundedCard.classList.toggle('d-block');
        event.stopPropagation(); // Prevent the click from propagating to the document
    };

    openCardIcon.addEventListener('click', toggleCard);
    openCardIcon2.addEventListener('click', toggleCard);

    // Function to close the card when clicking outside of it
    document.addEventListener('click', function() {
        roundedCard.classList.remove('d-block');
    });

    // Prevent clicking inside the card from closing it
    roundedCard.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
