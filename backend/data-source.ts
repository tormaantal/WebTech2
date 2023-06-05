import "reflect-metadata"
import { DataSource } from "typeorm"
import { Worker } from "./src/entity/Worker"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "webtech2",
    synchronize: true,
    logging: true,
    entities: [Worker],
    migrations: [],
    subscribers: [],
})
