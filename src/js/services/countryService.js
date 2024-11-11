import { apiRequest } from "../helpers/apiRequests.js";

export const getCountries = async () => {
  return apiRequest("/countries");
};

export const getCountryName = async (code) => {
  return apiRequest(`/countries/${code}`);
};
