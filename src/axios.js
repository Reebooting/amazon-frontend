import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazon-affiliate-website.onrender.com/",
});

export default instance;
