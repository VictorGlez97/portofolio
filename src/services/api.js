import axios from "axios";

const api = axios.create({
    // baseURL: 'http://localhost:5000/api/',
    baseURL: 'https://apiadmin-xi.vercel.app/api/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;