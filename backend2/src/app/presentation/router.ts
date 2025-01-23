import express, {Request, Response} from "express";
import {ResponseTypes} from "../../types/response-types";
import {getTableBD} from "../repositories/user-query -repositories";
import {myDB} from "../../db/db";

export const router = express.Router();

const getTableDataHandler = (table: string, columns: string[]) => async (req: Request, res: Response) => {
    try {
        const result: any = await getTableBD(table, columns);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};


router.get("/", async (req: Request, res: Response) => {
        res.status(200).json({message: "Hello Чебурек"})
    }
)

router.get("/products", getTableDataHandler(
    "products",
    [
        "id",
        "name",
        "price",
        "quantity",
        "category",
        "description",
        "image",
        "label"
    ]));

