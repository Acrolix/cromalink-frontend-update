import { apiAuthRequest, apiRequest } from "../helpers/apiRequests.js";

export const authLogin = async (username, password) => {
  return await apiRequest("/auth/login", {
    method: "POST",
    body: {
      email: username,
      password,
    },
  });
};

export const authRegister = async ({
  username,
  first_name,
  last_name,
  email,
  birth_date,
  country_code,
  password,
  password_confirmation,
}) => {
  return await apiRequest("/auth/register", {
    method: "POST",
    body: {
      username,
      first_name,
      last_name,
      email,
      birth_date,
      country_code,
      password,
      password_confirmation,
    },
  });
};

export const authLogout = async () => {
  localStorage.clear();
  sessionStorage.clear();
  return await apiAuthRequest("/auth/logout", {
    method: "POST",
  });
};

export const authVerify = async () => {
  return await apiAuthRequest("/auth/verify");
};
