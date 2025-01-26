import {myDB} from "../../db/db";

export const getTableBD = async (table: string, columns: string[], filters?: string) => {
    try {
        let result: any = await myDB.getTable(table, columns, filters)
        const resp = result.map((item: any) => {
            return item.result
        })
        console.log(resp)
        return resp
    } catch (error) {
        throw error
    }
}
