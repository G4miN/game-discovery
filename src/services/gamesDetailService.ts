import APIClient from "./api-client";

export interface GameDetail {
    name: string;
    description_raw: string;
}

export default new APIClient<GameDetail>('/games')