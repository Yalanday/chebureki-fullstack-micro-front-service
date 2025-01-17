import mysql, {Connection} from 'mysql2/promise'
import {ConnectionOptions} from "mysql2";
import {TableTypes} from "../types/db.types";
import fs from 'fs';
import path from 'path';
import {paramDB} from "../config-files/db.patams";

class MyDataBase {
    param: ConnectionOptions;

    constructor(param: ConnectionOptions) {
        this.param = param
    }

    connectToDB = async () => {
        try {
            const connection = await mysql.createConnection(this.param);
            console.log('🚀 Database connected successfully');
            const schemaFilePath = path.join(__dirname, 'schema.sql');
            await this.executeSqlFromFile(connection, schemaFilePath);
            return connection;
        } catch (error) {
            console.error('❌ Failed to connect to the database:', error);
            process.exit(1);
        }
    };

    executeSqlFromFile = async (connection: mysql.Connection, filePath: string) => {
        try {
            const sqlQuery = fs.readFileSync(filePath, 'utf-8');
            const queries = sqlQuery
                .split(';')
                .map(query => query.trim())
                .filter(query => query.length > 0);
            for (const query of queries) {
                await connection.query(query);
                console.log('✅ Query executed successfully:', query);
            }
        } catch (error) {
            console.error('❌ Error executing SQL from file:', error);
        }
    };

    public async queryInsert<T>(table: TableTypes, [...arrParam]: T[], [...arrValue]: any[]) {
        let connection: Connection;
        try {
            connection = await this.connectToDB();
            const columns = arrParam.join(', ');
            const arrPlaceholders = arrParam.map(item => '?').join(',');
            const query = `INSERT INTO ${table} (${columns})
                           VALUES (${arrPlaceholders})`;

            await connection.execute(query, [...arrValue]);
            console.log(`queryInsert for ${table} OK`)
        } catch (err) {
            console.log(`queryInsert for ${table} ERROR`);
            throw err;
        } finally {
            await connection.end();
        }
    }

    public async checkDB() : Promise<void> {
        let connection : Connection;
        try {
            connection = await this.connectToDB();
            await connection.connect();
            console.log('checkBD OK')
        } catch (err) {
            console.log('checkDB ERROR')
            throw err;
        } finally {
            await connection.end();
            console.log('checkDB END')
        }
    }
}

export const myDB = new MyDataBase(paramDB);



