
document.addEventListener('DOMContentLoaded', function() {

    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-btn');

    // Open modal and prevent background scrolling
    toggleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const targetModal = button.getAttribute('data-target');
            const modal = document.getElementById(targetModal);
            modal.style.display = 'flex';
            document.body.classList.add('body-no-scroll');  // Disable body scroll
        });
    });
   
    // Close modal and re-enable background scrolling
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const targetModal = button.getAttribute('data-close');
            const modal = document.getElementById(targetModal);
            modal.style.display = 'none';
            document.body.classList.remove('body-no-scroll');  // Re-enable body scroll
        });
    });

    // Close modal if clicked outside the modal content
    window.onclick = function(event) {
        modals.forEach(function(modal) {
            if (event.target == modal) {
                modal.style.display = 'none';
                document.body.classList.remove('body-no-scroll');  // Re-enable body scroll
            }
        });
    };

});

