//config
import {port} from "./config-files/port";
import {app} from "./app";
import {myDB} from "./db/db";
import {TableTypes} from "./types/db.types";
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

const addAdmin = async () => {
    await myDB.queryInsert(
        TableTypes.cashiers,
        ['name', 'lastname', 'password'],
        ['Zinaida', 'Spears', '333']
    )
}

addAdmin()



