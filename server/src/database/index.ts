import {Pool} from 'pg'
import {poolConfig} from "../config";

const pool = new Pool(poolConfig)

class Database {

    // Указать ключи соответс. передаваемым данным ($1, $2, ...etc)
    getItems (params: Object): string {
        return Object.values(params).map((_, index) => `$${index + 1}`).join(', ')
    }

    // Получить все значения из объекта
    getValues(params: Object): string[] {
        return Object.values(params).map(i => i)
    }

    // Получить все ключи объекта и вернуть их конкатенацию (key1, key2, key3, ...etc)
    getKeys (params: Object): string {
        return Object.keys(params).map(i => i).join(', ')
    }

    // Получить всю таблицу
    async find (tableName = 'cars') {
        const entities = await pool.query(`SELECT * FROM ${tableName}`)
        return entities.rows
    }

    // Создание сущности
    async create(params: Object, tableName = 'cars') {
        const newEntity =
            await pool.query(`INSERT INTO ${tableName} (${this.getKeys(params)}) values (${this.getItems(params)}) RETURNING *`, this.getValues(params))

        return newEntity.rows[0]
    }

    async filter (request: string) {
        const entities = await pool.query(request)
        return entities.rows
    }

}

export const db = new Database()