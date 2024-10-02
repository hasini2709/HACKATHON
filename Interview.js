document.addEventListener('DOMContentLoaded', function() {

    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-btn');

    toggleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const targetModal = button.getAttribute('data-target');
            document.getElementById(targetModal).style.display = 'flex';
        });
    });

  
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const targetModal = button.getAttribute('data-close');
            document.getElementById(targetModal).style.display = 'none';
        });
    });

   
    window.onclick = function(event) {
        modals.forEach(function(modal) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    };
   

});

