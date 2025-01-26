import {getTableBD} from "../app/repositories/user-query -repositories";

const getTableDataHandlerApollo = (table: string, columns: string[]) => async () => {
    try {
        return await getTableBD(table, columns);  // Просто возвращаем результат
    } catch (error) {
        throw new Error(`Failed to fetch data: ${error.message}`);  // Генерируем ошибку, если что-то пошло не так
    }
};

export const resolvers = {
    Query: {
        getTableData: (_: any, { table, columns }: { table: string, columns: string[] }) => {
            return getTableDataHandlerApollo(table, columns)();
        }
    }
};
