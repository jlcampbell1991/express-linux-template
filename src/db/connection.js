const postgres = require('postgres')

const Logger = require("./logs").default

const sql = postgres({
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT)
})

module.exports.default = () => {
    const logger = new Logger(sql)

    return {
        sql, logger
    }
}