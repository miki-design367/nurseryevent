document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.getElementById('js-hamburger');
    const nav = document.getElementById('js-nav');

    hamburgerButton.addEventListener('click', function() {
        hamburgerButton.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });
});