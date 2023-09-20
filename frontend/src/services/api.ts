import axios from "axios";



const apiUrl = import.meta.env.VITE_REACT_APP_URL || "http://localhost:3001";
console.log("🚀 ~ file: api.ts:6 ~ apiUrl:", apiUrl)

export const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
