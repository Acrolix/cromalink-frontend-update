import { apiRequest } from "../helpers/apiRequests.js";

export default async function getCountries() {
  return apiRequest("/countries");
}
