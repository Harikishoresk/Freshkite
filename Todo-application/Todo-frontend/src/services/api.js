import toast from "react-hot-toast";
import axios from "axios";
import { gettoken } from "../local storage/storage";

const API_URL = "http://localhost:5000";

const api = axios.create({
    baseURL : API_URL,
    headers: {
        'content-type': 'application/json'
    }
})

api.interceptors.request.use(
    (req) => {
        const token = gettoken();
        if (token) {
            req.headers.Authorization = `Bearer ${token}`;
        }
        return req;
    }, 
    (error) => {
        toast.error(error);
        return Promise.reject(error);
    }

)

api.interceptors.response.use(
    (res) => {
        return res.data;
    },
    (err) => {
        const msg = err.response?.data?.error || "An error occurred"
        toast.error(msg);

        if(err.response?.status == 401) {
            console.log("Error", msg);
        }

        return Promise.reject(msg);
    }
)

export default api;

