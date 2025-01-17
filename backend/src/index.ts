//config
import {port} from "./config-files/port";
import {app} from "./app";
import {myDB} from "./db/db";
import {AddUserEnum, TableTypes} from "./types/db.types";
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


const addAdmin = async () :Promise<void> => {
    await myDB.queryInsert<AddUserEnum>(
        TableTypes.cashiers,
        [AddUserEnum.name, AddUserEnum.lastname, AddUserEnum.password],
        ['Zinaida', 'Spears', '333']
    )
}

addAdmin()



