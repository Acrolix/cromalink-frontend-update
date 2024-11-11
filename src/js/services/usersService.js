import { apiAuthRequest } from "../helpers/apiRequests.js";

export async function getUser() {
  return apiAuthRequest("/users/me");
}
