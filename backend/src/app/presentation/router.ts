import express, {Request, Response} from "express";
import {ResponseTypes} from "../../types/response-types";
import {
    data,
    StaticDirectorsData,
    StaticUserData
} from "../static-data";
import {getTableBD} from "../repositories/user-query -repositories";
import {log} from "node:util";
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

router.get('/type-users', (req, res: ResponseTypes<StaticUserData>) => {
    res.json(data.users);
});

router.get('/directors', (req, res: ResponseTypes<StaticDirectorsData>) => {
    res.json(data.directors);
});

router.get('/admins', getTableDataHandler('admins', ['id', 'name', 'lastname', 'status']));

router.get('/cashiers', getTableDataHandler('cashiers', ['id', 'name', 'lastname', 'status']));

router.get('/general-director', getTableDataHandler('directors', ['id', 'name', 'lastname', 'status']));

router.get('/semi-director', getTableDataHandler('semidirectors', ['id', 'name', 'lastname', 'status']));


router.post('/login', async (req, res) => {
    const result = await myDB.checkUser(req.body.table, req.body.id, req.body.password)
    console.log(result)
    res.status(200).json(result);
})
