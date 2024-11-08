import { navigateTo } from "./helpers/generics.js";
import { authLogin, authLogout, authVerify } from "./services/authService.js";
const loginForm = document.querySelector(".login_formulario");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  login();
});

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const remember_me = document.getElementById("remember_me").checked;
  const errorLabel = document.getElementById("errorLabel");

  //   authVerify()
  //     .then((response) => {
  //       console.log("authVerify response: ", response);
  //     })
  //     .catch((error) => {
  //       console.log("authVerify error: ", error);
  //     });

  // authLogout()
  //   .then((response) => {
  //     console.log("authLogout response: ", response);
  //   })
  //   .catch((error) => {
  //     console.log("authVerify error: ", error);
  //   });

  authLogin(username, password)
    .then((response) => {
      let storage;
      remember_me ? (storage = localStorage) : (storage = sessionStorage);
      storage.setItem("token", response.access_token);
      storage.setItem("refresh_token", response.refresh_token);
      storage.setItem("expires_in", response.expires_in);
      navigateTo("/");
    })
    .catch((error) => {
      errorLabel.innerHTML = "Usuario o contraseña incorrectos";
      errorLabel.style.opacity = 1;
    });
}
