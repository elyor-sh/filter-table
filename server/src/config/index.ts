import {PoolConfig} from "pg";

const nodeEnv = process.env.NODE_ENV === 'development' ? 'DEV' : 'PROD'

// PORT
const PORT = Number(process.env.PORT) || 4200

// Database config (postgresql)
const poolConfig: PoolConfig = {
    user: process.env[`DB_USER_${nodeEnv}`]!,
    host: process.env[`DB_HOST_${nodeEnv}`]!,
    password: process.env[`DB_PASSWORD_${nodeEnv}`]!,
    database: process.env[`DB_DATABASE_${nodeEnv}`]!,
    port: Number(process.env[`DB_PORT_${nodeEnv}`])
}


export {
    PORT,
    poolConfig
}

