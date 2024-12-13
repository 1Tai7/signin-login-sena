let email = "";
let password = "";
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
emailError.style.color = "#FF5E5B";
passwordError.style.color = "#FF5E5B";
let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
let validPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Mínimo 8 caracteres, al menos una letra y un número

const form = document.getElementById("stayUpdatedForm");

const openModal = document.querySelector(".subscribe");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector("#dismiss");

document.getElementById("email").addEventListener("change", (event) => {
  email = event.target.value;
});
document.getElementById("password").addEventListener("change", (event) => {
  password = event.target.value;
});

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe
  alert("hola");
  let emailErrorMessage = [];
  console.log(emailErrorMessage);
  let passwordErrorMessage = [];
  console.log(passwordErrorMessage);

  // Validación del correo electrónico
  if (!email || !validEmail.test(email)) {
    emailInput.style.color = "#FF5E5B";
    emailInput.style.background = "#FFE0DF";
    emailErrorMessage.push("Email válido requerido");
  } else {
    emailInput.style.removeProperty("color");
    emailInput.style.removeProperty("background");
  }

  // Validación de la contraseña
  if (!password || !validPassword.test(password)) {
    passwordInput.style.color = "#FF5E5B";
    passwordInput.style.background = "#FFE0DF";
    passwordErrorMessage.push(
      "La contraseña debe tener al menos 8 caracteres, incluyendo una letra y un número."
    );
  } else {
    passwordInput.style.removeProperty("color");
    passwordInput.style.removeProperty("background");
  }

  // Mostrar errores
  emailError.innerHTML = emailErrorMessage; // Muestra el error del email
  passwordError.innerHTML = passwordErrorMessage; // Muestra el error de la contraseña

  // Continuar si no hay errores
  console.log(emailErrorMessage.length);
  console.log(passwordErrorMessage);

  if (emailErrorMessage.length === 0 && passwordErrorMessage.length === 0) {
    modal.classList.add("modal--show"); // Muestra el modal si no hay errores
  }
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  emailInput.value = "";
  passwordInput.value = "";
  modal.classList.remove("modal--show");
  location.href = "./signup.html";
});
