import {myDB} from "../../db/db";

export const getTableBD = async (table: string, columns: string[]) => {
    try {
        let result: any = await myDB.getTable(table, columns)
        const resp = result.map((item: any) => {
            return item.result
        })
        console.log(resp)
        return resp
    } catch (error) {
        throw error
    }
}
