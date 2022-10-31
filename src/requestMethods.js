import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2E5NDgyMGE3YTdlNDcxYzlmNDhiNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjQ3Nzc0NCwiZXhwIjoxNjY2NzM2OTQ0fQ.df_xrorlxXpd9zPDDYNuDCTPS1ApT-y_QLGMNoMAUK4";

export const publicRequest = axios.create({
    baseURL : BASE_URL
})

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header : {token : `Bearer ${TOKEN}`}
});