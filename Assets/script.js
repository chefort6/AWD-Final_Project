document.getElementById("profileIcon").addEventListener("click", function () {
    var loginForm = document.getElementById("loginForm");
    loginForm.classList.toggle("active");
    var registerForm = document.getElementById("registerForm");
    if (registerForm.style.display === "block") {
      registerForm.style.display = "none";
    }
  });
  
  document
    .getElementById("toggleRegister")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("registerForm").style.display = "block";
    });
  
  let slideIndex = 0;
  
  window.onload = function () {
    showSlides();
  
    setInterval(function () {
      plusSlides(1);
    }, 10000);
  };
  
  function showSlides() {
    const slides = document.getElementsByClassName("carousel");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    slides[slideIndex].style.display = "block";
  }
  
  function plusSlides(n) {
    slideIndex += n;
    showSlides();
  }
  
  document.getElementById("buttondown").addEventListener("click", function () {
    const targetSection = document.getElementById("carousel-section");
    const targetOffset = targetSection.offsetTop;
  
    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });
  
    setTimeout(function () {
      targetSection.classList.add("revealed");
    }, 1000);
  });