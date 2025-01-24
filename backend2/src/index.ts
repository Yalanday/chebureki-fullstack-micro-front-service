//config
import {port} from "./config-files/port";
import {app} from "./app";
import {myDB} from "./db/db";
import {AddProductEnum, TableTypes} from "./types/db.types";
import {router} from "./app/presentation/router";


app.use('/', router)

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
    try {
        await myDB.checkDB();
    } catch (err) {
        console.log("Error connecting to database", err);
    }
})


const addProduct = async () :Promise<void> => {
    await myDB.queryInsert<AddProductEnum>(
        TableTypes.products,
        [AddProductEnum.name, AddProductEnum.price, AddProductEnum.quantity, AddProductEnum.category, AddProductEnum.description, AddProductEnum.image, AddProductEnum.label],
        ['Чебурек с бараниной', 110, 60, 'чебуреки с мясом', 'Классический чебурек с бараниной по традиционному рецепту', '/images/cheburek.jpg', 'chebureks-baran'],
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

