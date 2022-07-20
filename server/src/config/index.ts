
const nodeEnv = process.env.NODE_ENV === 'development' ? 'DEV' : 'PROD'

const PORT = Number(process.env.PORT) || 4200

export {PORT}

