import 'dotenv/config'
import express, {Request, Response} from 'express'
import cors from 'cors'
import * as path from 'path'

import {PORT} from "./config"
import {router as carsRouter} from './routes/cars.route'
import {createTable} from "./database/create-table";

const app = express()

// cors middleware
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '..', '..', 'client', 'build')))

// routes
app.use('/api/cars', carsRouter);


app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'client', 'build', 'index.html'))
});



// Server start function
(
    async () => {
        try {

            await createTable()

            await app.listen(PORT, () => console.log(`Server has been started in port = ${PORT}`))

        }catch (e) {
            console.log('Server start error', e)
            process.exit(0)
        }
    }
)()