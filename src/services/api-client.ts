import axios, { AxiosRequestConfig } from "axios";
import theme from '../theme';

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "a442c9897ad1448e87ea262b1dec3d5c"
    }
});
export interface FetchResponse<T> {
    count: number;
    results: T[];
    next: string | null
}

class APIClient<T> {
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    get = (params = {}) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, params).then(res => res.data);
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data);
    }

    post = (data: T) => {
        return axiosInstance.post<FetchResponse<T>>(this.endpoint, data).then(res => res.data);
    }
}

export default APIClient;