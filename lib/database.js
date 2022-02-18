import sqlite3 from "sqlite3";
import { open } from "sqlite";

const DATABASE_PATH = "./gmate.db"

export default async function connect() {
    return open({
        filename: DATABASE_PATH,
        driver: sqlite3.Database
    }) 
}