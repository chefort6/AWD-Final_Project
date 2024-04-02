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
