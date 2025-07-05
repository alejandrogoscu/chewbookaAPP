import axios from "axios";

const API_URL = "http://localhost:8080/users/";

const getProfile = async (token) => {
    console.log('TOKEN ENVIADO A BACKEND:', token); // <-- Depuración
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const res = await axios.get(API_URL + "me", config);
    return res.data;
};

const userService = {
    getProfile,
};

export default userService;
