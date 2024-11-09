import { authRegister } from "./services/authService.js";
import getCountries from "./services/getCountries.js";
import { navigateTo } from "./helpers/generics.js";

const form = document.querySelector(".register_formulario");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  register();
});

const show_password = document.querySelector(".toggle-password");

show_password.addEventListener("click", () => {
  const password = document.getElementById("password");
  password.type = password.type === "password" ? "text" : "password";
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

  authRegister(data, { method: "POST" })
    .then((response) => {
      const submit = document.getElementById("registerSubmit");
      submit.classList.add("registerSuccess");
      let flag = 5;
      submit.textContent = `Registrado Correctamente ${flag}`;
      setInterval(() => {
        flag--;
        submit.textContent = `Registrado Correctamente ${flag}`;
        if (flag == 0) navigateTo("/login");
      }, 1000);

      // return navigateTo("/login");
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
                fieldElement.classList.remove("error");
                errorDiv.style.display = "none";
              });
            }
          }
        }
      }
    });
}
