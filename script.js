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
