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

export const authRegister = ({
  username,
  first_name,
  last_name,
  email,
  birthdate,
  country_code,
  password,
  password_confirmation,
}) => {
  return apiRequest("/auth/register", {
    method: "POST",
    body: {
      username,
      first_name,
      last_name,
      email,
      birthdate,
      country_code,
      password,
      password_confirmation,
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
