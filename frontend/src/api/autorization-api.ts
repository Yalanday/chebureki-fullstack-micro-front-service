import axios from "axios";
import {UserContent} from "@/types/api-types";

export const authorizationAPI = async <T>(rout: string): Promise<T> => {
    try {
        const response = await axios.get(`http://localhost:3001/${rout}`);
        console.log(response.data)
        return response.data;

    } catch (error) {
        console.error(error)
        return Promise.reject(error)
    }
}

export const loginAPI = async (values: any) : Promise<UserContent> => {
    try {
        const response = await axios.post('http://localhost:3001/login', {
                ...values
            }
        );
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error(error)
        return Promise.reject(error)
    }

}