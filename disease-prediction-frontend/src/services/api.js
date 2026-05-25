//Axios Instance 

import axios from "axios"

const API = axios.create({
    baseURL:"https://diagnoai-backend.onrender.com/api",
    headers:{
        "Content-Type":"application/json"
    }
});

export default API