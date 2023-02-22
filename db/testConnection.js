import {database} from './connection.js'

database.getConnection()
    .then(connection => {
        console.log("Succesfully connection established")
        connection.release()
    })
    .catch(err => console.log("Error to connect" + err))