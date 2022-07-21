import {db, pool} from "./index";

// При инизиализации проекта создаем таблицу если нет таблица в базе данных
export const createTable = async () => {
    try {
        const res = await db.find()

        console.log(res)
    } catch (e) {
        pool.query(`CREATE TABLE cars
                    (
                        id       SERIAL PRIMARY KEY,
                        name     VARCHAR(40),
                        count    INTEGER,
                        distance DECIMAL,
                        date     VARCHAR(255)
                    );`, (err, res) => {
            if (err) {
                throw new Error('Не подключен к базе данных')
            }

            console.log('created table')
            pool.end();
        });
    }
}