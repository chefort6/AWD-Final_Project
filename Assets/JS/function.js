document.getElementById('profileIcon').addEventListener('click', function() {
    var loginForm = document.getElementById('loginForm');
    loginForm.classList.toggle('active');
    var registerForm = document.getElementById('registerForm');
    if (registerForm.style.display === 'block') {
        registerForm.style.display = 'none';
    }
});

document.getElementById('toggleRegister').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
});

document.addEventListener("DOMContentLoaded", function() {
    var discoverButton = document.getElementById("discoverButton");
    discoverButton.addEventListener("click", function(event) {
        event.preventDefault();
        var container2Section = document.querySelector(".container-2");
        container2Section.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var scrollDownButton = document.getElementById("downButton");
    scrollDownButton.addEventListener("click", function(event) {
        event.preventDefault();
        var carouselCarsSection = document.getElementById("carousel-cars");
        carouselCarsSection.scrollIntoView({ behavior: "smooth" });
    });
});

