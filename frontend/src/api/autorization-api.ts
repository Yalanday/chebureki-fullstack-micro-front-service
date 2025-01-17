import axios from "axios";
import {Ref} from "vue";


export const authorizationAPI = async <T>(rout: string) :Promise<T> => {
    try {
        const response = await axios.get(`http://localhost:3001/${rout}`);
        return response.data;

    } catch (error) {
        console.error(error)
        return Promise.reject(error)
    }
}