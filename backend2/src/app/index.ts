import express, {Response} from 'express';
import xssClean from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';
import morgan from 'morgan';
import cors from 'cors';
import corsOption from "../config-files/cors";

export const app = express();
app.use(cors(corsOption));
app.use(express.json());

// Очищает данные от вредоносных скриптов
app.use(xssClean());
// Удаляет операторы $ и . из входящих данных
app.use(mongoSanitize());
// Доля логирования
app.use(morgan('dev'));
// Добавляет корневую папку для статических файлов
app.use(express.static('public'));

