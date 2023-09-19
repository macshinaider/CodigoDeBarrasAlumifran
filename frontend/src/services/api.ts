import axios from "axios";

export const api = axios.create({
  baseURL: "https://urban-acorn-r46x94q5x9pfq6r-3001.app.github.dev/",
  headers: {
    "Content-Type": "application/json",
  },
});
