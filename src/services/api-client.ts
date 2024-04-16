import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "a442c9897ad1448e87ea262b1dec3d5c"
    }
});