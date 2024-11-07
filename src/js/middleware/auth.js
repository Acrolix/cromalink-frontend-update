import { getPathFromHref, navigateTo } from "../helpers/generics";
import { authVerify } from "../services/authService";

function authMiddleware() {
  const loginPath = "/login";
  const href = getPathFromHref(window.location.href);
  authVerify()
    .then((response) => {
      if (href === loginPath) return navigateTo("/");
      document.getElementsByTagName("body")[0].hidden = false;
    })
    .catch((error) => {
      if (href !== loginPath) return navigateTo(loginPath);
      document.getElementsByTagName("body")[0].hidden = false;
    });
}
document.getElementsByTagName("body")[0].hidden = true;
authMiddleware();
