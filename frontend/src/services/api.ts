import axios from "axios";



const apiUrl = import.meta.env.VITE_REACT_APP_URL || "https://consultapreco-backend.mqcprs.easypanel.host";
console.log("🚀 ~ file: api.ts:6 ~ apiUrl:", apiUrl)

export const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
