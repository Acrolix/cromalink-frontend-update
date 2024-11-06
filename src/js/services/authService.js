import { apiAuthRequest, apiRequest } from "../helpers/apiRequests";

export const authLogin = (username, password) => {
  return apiRequest("/auth/login", {
    method: "POST",
    body: {
      email: username,
      password,
    },
  });
};

export const authLogout = () => {
  localStorage.clear();
  sessionStorage.clear();
  return apiAuthRequest("/auth/logout", {
    method: "POST",
  });
};

export const authVerify = () => {
  return apiAuthRequest("/auth/verify");
};
