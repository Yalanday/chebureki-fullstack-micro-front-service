import dotenv from "dotenv";
import {ConnectionOptions} from "mysql2";

dotenv.config();

export const paramDB: ConnectionOptions = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME
}

