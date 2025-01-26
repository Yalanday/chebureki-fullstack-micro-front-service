import {getTableBD} from "../app/repositories/user-query -repositories";

const getTableDataHandlerApollo = (table: string, columns: string[], filters?: { column: string, operator: string, value: string }[]) => async () => {
    try {

        console.log(filters)

        const filterConditions = filters?.map(filter => {
            return `${filter.column} ${filter.operator} '${filter.value}'`; // Пример: price > 100
        }).join(' AND ');

        console.log(filterConditions)

        return await getTableBD(table, columns, filterConditions);  // Просто возвращаем результат
    } catch (error) {
        throw new Error(`Failed to fetch data: ${error.message}`);  // Генерируем ошибку, если что-то пошло не так
    }
};

export const resolvers = {
    Query: {
        getTableData: (_: any, { table, columns, filters }: { table: string, columns: string[], filters?: { column: string, operator: string, value: string }[] }) => {
            return getTableDataHandlerApollo(table, columns, filters)();
        }
    }
};
