import Screenshot from "../entities/Screenshot";
import APIClient from "./api-client";

export default new APIClient<Screenshot>("/games", "/screenshots");