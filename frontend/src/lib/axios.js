import axios from "axios";

export default axios.create({       
    baseURL: import.meta.env==="production" ? "http://localhost:3000/api" : "/api",    withCredentials :true,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});