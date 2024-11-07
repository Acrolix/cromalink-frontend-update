import { authRegister } from "./services/authService.js";
const loginForm = document.querySelector(".register_formulario");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  register();
});

function register() {
  const username = document.getElementById("username").value;
  const first_name = document.getElementById("first_name").value;
  const last_name = document.getElementById("last_name").value;
  const email = document.getElementById("email").value;
  const birthdate = document.getElementById("birth_date").value;
  const country_code = document.getElementById("country_code").value;
  const password = document.getElementById("password").value;
  const password_confirmation = document.getElementById(
    "password_confirmation"
  ).value;

  authRegister({
    username,
    first_name,
    last_name,
    email,
    birthdate,
    country_code,
    password,
    password_confirmation,
  })
    .then((response) => {
      let storage;
      remember_me ? (storage = localStorage) : (storage = sessionStorage);
      storage.setItem("token", response.access_token);
      storage.setItem("refresh_token", response.refresh_token);
      console.log("response: ", response);
    })
    .catch((error) => {
      if (error?.errors) {
        for (const [field, errors] of Object.entries(error.errors)) {
          // Marcar el campo con error
          const fieldElement = document.getElementById(field);
          if (fieldElement) {
            fieldElement.classList.add("error");

            // Encontrar el div de error asociado al campo
            const errorDiv = fieldElement.parentElement.querySelector(".error");
            if (errorDiv && errors.length > 0) {
              errorDiv.textContent = errors[0]; // Usar el primer (y único) mensaje de error
            }
          }
        }
      }
    });
}
