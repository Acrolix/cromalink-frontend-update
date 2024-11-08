import * as env from "../config/env.js";

/**
 * Request
 * @param {string} url
 * @param {object} options
 * @param {object} options.body
 * @param {string} options.method
 * @returns {Promise}
 */
export const apiRequest = (
  url,
  options = { body: {}, method: "GET", headers: {} }
) => {
  if (!url) throw new Error("URL is required");
  if (!url.includes("http"))
    url = `${env.API_URL}${url.startsWith("/") ? "" : "/"}${url}`;

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    ...options.headers,
  };

  const fetchOptions = {
    method: options.method,
    headers,
  };

  if (options.method === "GET") fetchOptions.params = options.body;
  else fetchOptions.body = JSON.stringify(options.body);

  if (options.body?.hasOwnProperty("password"))
    fetchOptions.withCredentials = true;

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: options.method,
      headers,
      body: fetchOptions.body,
    })
      .then(async (response) => {
        const res = await response.json();
        res.status = response.status;
        if (response.status === 200) return resolve(res);
        return reject(res);
      })
      .catch((error) => {
        console.error(error);
        return reject({ message: "Se produjo un error en el servidor" });
      });
  });
};

export const apiAuthRequest = (
  url,
  options = { body: {}, method: "GET", headers: {} }
) => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  if (!token) return Promise.reject({ message: "No autorizado" });
  if (token) options.headers.Authorization = `Bearer ${token}`;
  return apiRequest(url, {
    body: options.body,
    method: options.method,
    headers: {
      ...options.headers,
    },
  });
};
