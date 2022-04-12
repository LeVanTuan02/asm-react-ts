import axios from "axios";

const instance = axios.create({
    baseURL: "https://yotea-nodejs.herokuapp.com/api"
});

export default instance;