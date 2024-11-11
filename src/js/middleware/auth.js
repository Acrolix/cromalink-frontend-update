import { getPathFromHref, navigateTo } from "../helpers/generics";
import { authVerify } from "../services/authService";

function blockView(hide) {
  const body = document.getElementsByTagName("body")[0];
  body.hidden = hide ? hide : !body.hidden;
}

function authMiddleware() {
  const loginPath = "/login";
  const registerPath = "/register";
  const href = getPathFromHref(window.location.href);
  authVerify()
    .then((response) => {
      if (href.match(`^(${loginPath}|${registerPath})(\.html)?$`))
        return navigateTo("/");
      blockView();
    })
    .catch((error) => {
      console.log("Auth error: ", error);
      if (!href.match(`^(${loginPath}|${registerPath})(\.html)?$`))
        return navigateTo(loginPath);
      blockView();
    });
}
document.getElementsByTagName("body")[0].hidden = true;
authMiddleware();
