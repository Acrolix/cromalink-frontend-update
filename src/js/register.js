import { authRegister } from "./services/authService.js";
import getCountries from "./services/getCountries.js";
const loginForm = document.querySelector(".register_formulario");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  register();
});

getCountries().then((countries) => {
  const countrySelect = document.getElementById("country_code");
  countries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country.code;
    option.textContent = country.name;
    countrySelect.appendChild(option);
  });
});

// document.querySelectorAll(".casilla").forEach((casilla) => {
//   casilla.addEventListener("focusin", (e) => {
//     e.preventDefault();
//     console.log("hola");
//     casilla.classList.remove("error");
//   });
// });

function register() {
  const data = {
    username: document.getElementById("username").value,
    first_name: document.getElementById("first_name").value,
    last_name: document.getElementById("last_name").value,
    email: document.getElementById("email").value,
    birth_date: document.getElementById("birth_date").value,
    country_code: document.getElementById("country_code").value,
    password: document.getElementById("password").value,
    password_confirmation: document.getElementById("password_confirmation")
      .value,
  };

  console.log("data: ", data);

  authRegister(data, { method: "POST" })
    .then((response) => {
      console.log("response: ", response);
    })
    .catch((error) => {
      console.log("error: ", error);
      if (error?.errors) {
        for (const [field, errors] of Object.entries(error.errors)) {
          const fieldElement = document.getElementById(field);

          if (fieldElement) {
            fieldElement.removeEventListener("focus", () => {});
            const errorDiv =
              fieldElement.parentElement.querySelector(".errorField");
            if (errorDiv && errors.length > 0) {
              errorDiv.style.display = "block";
              errorDiv.textContent = errors[0];
            }
            if (!fieldElement.classList.contains("error")) {
              fieldElement.classList.add("error");
              fieldElement.addEventListener("focus", () => {
                console.log("hola");
                fieldElement.classList.remove("error");
                errorDiv.style.display = "none";
              });
            }
          }
        }
      }
    });
}
