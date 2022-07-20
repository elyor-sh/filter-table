import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import {PORT} from "./config"

const app = express()

app.use(cors())
app.use(express.json());


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