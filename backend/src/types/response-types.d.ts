import {Response} from "express";

export interface ResponseTypes<T> extends Response {
    data: T
}
