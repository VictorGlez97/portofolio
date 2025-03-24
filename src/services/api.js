import axios from "axios";

const api = axios.create({
    // baseURL: 'https://apiadmin-xi.vercel.app/api/',
    baseURL: 'http://localhost:5000/api/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;