// ===== CONTACT FORM SUCCESS MESSAGE =====
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  successMessage.style.display = "block";

  form.reset();

  setTimeout(() => {
    successMessage.style.display = "none";
  }, 5000);
});