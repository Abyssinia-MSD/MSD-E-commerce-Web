import axios from "axios"
const BASE_URL = "http://10.4.99.173:8000";
const TOKEN = "";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}` }
})