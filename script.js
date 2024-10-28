const navToggle = document.querySelector('.nav-toggle');
const navHeader = document.querySelector('.nav-header');

navToggle.addEventListener('click', () => {
    navHeader.classList.toggle('active'); // Toggle the active class
});