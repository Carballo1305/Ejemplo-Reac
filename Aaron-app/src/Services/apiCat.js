import axios from "axios";

const apiCat = axios.create({
    baseURL: import.meta.env.VITE_API_THE_MEAL_DB,
    headers: {
        "Content-Type": "application/json",
    }

});

export default apiCat;