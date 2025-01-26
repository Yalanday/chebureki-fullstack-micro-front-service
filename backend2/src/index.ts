//config
import {port} from "./config-files/port";
import {app} from "./app";
import { json } from 'body-parser';
import {myDB} from "./db/db";
import {AddProductEnum, TableTypes} from "./types/db.types";
import {router} from "./app/presentation/router";
// настройка аполло
import {ApolloServer} from '@apollo/server';
import {expressMiddleware} from "@apollo/server/express4";
import {typeDefs} from "./graphql/schema";
import {resolvers} from "./graphql/resolvers";

app.use('/', router)

async function setupGraphQL() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    })

    await server.start();

    app.use(
        '/graphql',
        json(),
        expressMiddleware(server, {
            context: async ({ req }) => ({ token: req.headers.authorization }),
        }),
    );

    console.log('🚀 Apollo Server запущен на маршруте /graphql');
}

async function startServer() {
    await setupGraphQL();

    app.listen(port, () => {
        console.log(`Сервер запущен на http://localhost:${port}`);
        console.log(`REST API: http://localhost:${port}/api/`);
        console.log(`GraphQL: http://localhost:${port}/graphql`);
    });
}

startServer().catch(()=> console.log('Error'));

// app.listen(port, async () => {
//     console.log(`Server is running on port ${port}`);
//     try {
//         await myDB.checkDB();
//     } catch (err) {
//         console.log("Error connecting to database", err);
//     }
// })


const addProduct = async () :Promise<void> => {
    await myDB.queryInsert<AddProductEnum>(
        TableTypes.products,
        [AddProductEnum.name, AddProductEnum.price, AddProductEnum.quantity, AddProductEnum.category, AddProductEnum.description, AddProductEnum.image, AddProductEnum.label],
        ['Мохито', 70, 90, 'холодные напитки', 'Мохито это то что нужно в жаркий день с горячим пирожком', '/images/Mojito.jpg', 'Mojito'],
    )
}


// addProduct();



const fetching = async (): Promise<void> => {
    fetch('http://localhost:3001/directors')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error('NOOOOOOO', err));
}

// fetching().then()

