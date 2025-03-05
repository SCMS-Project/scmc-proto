import axios from "axios";

const BASE_URL = "http://localhost:5173"

const axiosInstance = axios.create({
  baseURL: BASE_URL, 
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
