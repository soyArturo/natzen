import axios from "axios";

const url = "https://conatct-api-9yta.onrender.com/";

const axiosInstance = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosInstance;
