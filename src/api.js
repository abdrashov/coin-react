import axios from "axios";

export default axios.create({
    baseURL: `http://coinapi.abdr.kz/`,
});
