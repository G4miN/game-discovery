import Movies from "../entities/Movies";
import APIClient from "./api-client";

export default new APIClient<Movies>("/games", "/movies");