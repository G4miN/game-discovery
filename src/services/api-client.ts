import axios, { AxiosRequestConfig } from "axios";

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
    url?: string;
    constructor(endpoint: string, url?: string) {
        this.endpoint = endpoint
        this.url = url
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

    getBy = (id: number | string) => {
        return axiosInstance.get<T>(`${this.endpoint}/${id}`).then(res => res.data);
    }

    getAllBy = (id: number | string) => {
        return axiosInstance.get<FetchResponse<T>>(`${this.endpoint}/${id}${this?.url}`).then(res => res.data)
    }
}

export default APIClient;