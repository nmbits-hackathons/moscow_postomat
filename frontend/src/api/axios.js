import axios from "axios";

const instance = axios.create({
    baseURL: 'http://45.67.228.220:3333'
})

export default instance
