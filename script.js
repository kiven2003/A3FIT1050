// JavaScript for "Back to Top" button

// Create the button
const backToTopButton = document.createElement("button");
backToTopButton.innerText = "↑ Back to Top";
backToTopButton.id = "backToTopButton";
document.body.appendChild(backToTopButton);

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};
// Scroll back to the top when the button is clicked
backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const navbarMenu = document.querySelector('#cs-navigation');
    const hamburgerMenu = document.querySelector('.cs-toggle');
    const ul = document.querySelector('#cs-expanded');

    // Toggle the 'aria-expanded' attribute
    function toggleAriaExpanded() {
        const expanded = ul.getAttribute('aria-expanded');
        ul.setAttribute('aria-expanded', expanded === 'false' ? 'true' : 'false');
    }

    // Toggle navigation menu and aria-expanded attribute
    function toggleMenu() {
        navbarMenu.classList.toggle('cs-active');
        toggleAriaExpanded();
    }

    // Add click event listener to the hamburger menu
    hamburgerMenu.addEventListener('click', toggleMenu);

    // Add click event listeners to dropdown items if there are any
    const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    dropDowns.forEach(item => {
        item.addEventListener('click', function() {
            item.classList.toggle('cs-active');
        });
    });
});
