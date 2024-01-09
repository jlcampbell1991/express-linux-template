const { v4: uuidv4 } = require('uuid');

exports.default = class {
    constructor(sql, playerId) {
        this.sql = sql
        this.playerId = playerId
    }

    insert = (logs, level) => {
        const created_at = new Date()
        const rows = logs.map(message => {
            const id = uuidv4()
            return { id, level, message: JSON.stringify(message), created_at }
        })
        return this.sql`insert into logs ${ this.sql(rows) }`
    }

    debug = (...logs) => {
        console.debug(...logs)
        return this.insert([...logs], "debug")
    }
    info = (...logs) => {
        console.info(...logs)
        return this.insert([...logs], "info")
    }
    warn = (...logs) => {
        console.warn(...logs)
        return this.insert([...logs], "warn")
    }
    error = (...logs) => {
        console.error(...logs)
        return this.insert([...logs], "error")
    }

    deleteOld = (daysAgo) => {
        console.log(`Deleting logs that are older than ${daysAgo} days`)

        return this.sql`
        delete from logs
        where created_at < (now() - INTERVAL '1 days')`
    }

    selectAll = (offset, limit) => {
        console.log("Selecting all logs")
        return this.sql`select * from logs order by created_at desc offset ${offset} limit ${limit}`
    }
}