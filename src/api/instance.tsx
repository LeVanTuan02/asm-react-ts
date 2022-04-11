import axios from "axios";

const instance = axios.create({
    baseURL: "https://asm-nodejs.vercel.app/api"
});

export default instance;