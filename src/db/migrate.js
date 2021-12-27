const { migrate } = require("postgres-migrations")

;(async () => {
  const dbConfig = {
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),

    // Default: false for backwards-compatibility
    // This might change!
    ensureDatabaseExists: true,

    // Default: "postgres"
    // Used when checking/creating "database-name"
    defaultDatabase: "postgres"
  }

  try {
    const res = await migrate(dbConfig, `${__dirname}/migrations`)
    console.log(res)
    console.log("Migrations successful")
  } catch(e) {
    console.error("Migrations failed")
    console.error(e)
  }
})()
