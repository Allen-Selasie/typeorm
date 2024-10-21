import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Car } from "./entity/Car"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "user",
    password: "password",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [User, Car],
    migrations: [],
    subscribers: [],
    driver: require('mysql2'),
    poolSize:70,

   
})
