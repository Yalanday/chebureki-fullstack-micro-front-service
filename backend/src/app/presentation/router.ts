import express from "express";
import {ResponseTypes} from "../../types/response-types";
import {
    data,
    StaticAdminsData,
    StaticAllDirectorData,
    StaticCashierData,
    StaticDirectorsData,
    StaticUserData
} from "../static-data";

export const router = express.Router();

router.get('/type-users', (req, res: ResponseTypes<StaticUserData>) => {
    res.json(data.users);
});

router.get('/directors', (req, res: ResponseTypes<StaticDirectorsData>) => {
    res.json(data.directors);
});

router.get('/admins', (req, res: ResponseTypes<StaticAdminsData>) => {
    res.json(data.admins);
});

router.get('/cashiers', (req, res: ResponseTypes<StaticCashierData>) => {
    res.json(data.cashiers);
});

router.get('/general-director', (req, res: ResponseTypes<StaticAllDirectorData>) => {
    res.json(data.generalDirector);
})

router.get('/semi-director', (req, res: ResponseTypes<StaticAllDirectorData>) => {
    res.json(data.semiDirector);
})
