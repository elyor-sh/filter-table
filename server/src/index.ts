import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import {PORT} from "./config"
import {router as carsRouter} from './routes/cars.route'

const app = express()

// cors middleware
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routes
app.use('/api/cars', carsRouter);

// Server start function
(
    async () => {
        try {

            await app.listen(PORT, () => console.log(`Server has been started in port = ${PORT}`))

        }catch (e) {
            console.log('Server start error', e)
            process.exit(0)
        }
    }
)()