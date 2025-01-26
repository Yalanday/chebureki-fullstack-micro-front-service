import {apolloClient} from "@/apollo";
import {DocumentNode} from "@apollo/client";
import { Ref} from 'vue';

export const getProductsApollo = async <T>(query: DocumentNode, data: Ref<T[]>) => {
    try {
        const response = await apolloClient.query({
            query:  query,
        });
        data.value = response.data.getTableData; // Заполняем данные в items
    } catch (error) {
        console.error('Ошибка при запросе данных:', error);
    }
};
