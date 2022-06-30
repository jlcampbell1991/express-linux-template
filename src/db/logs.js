const { v4: uuidv4 } = require('uuid');

exports.default = class {
    constructor(sql) {
        this.sql = sql
    }

    insert = (log, level) => {
        const date = new Date()
        const id = uuidv4()
        return this.sql`insert into logs (
            id,
            level,
            message,
            created_at
        ) values (
            ${id},
            ${log.mediumId},
            ${level},
            ${log.message},
            ${date}
        )`
    }

    debug = (log) => {
        console.debug(log)
        return this.insert(log, "debug")
    }
    info = (log) => {
        console.info(log)
        return this.insert(log, "info")
    }
    warn = (log) => {
        console.warn(log)
        return this.insert(log, "warn")
    }
    error = (log) => {
        console.error(log)
        return this.insert(log, "error")
    }

    deleteOld = (daysAgo) => {
        console.log(`Deleting logs that are older than ${daysAgo} days`)
        return this.sql`
        delete from media
        where created_at < (now() - INTERVAL '${daysAgo} days')`
    }
}