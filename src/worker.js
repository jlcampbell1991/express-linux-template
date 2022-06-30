const CronJob = require('cron').CronJob
const { exec } = require("child_process")
const { logger } = require('./db/connection')

async function sendCmd(cmd) {
    exec(cmd, async (err, stdout, stderr) => {
        if(err) {
            console.error(err)
        }
        if(stdout) {
            console.log(stdout)
        }
        if(stderr) {
            console.error(stderr)
        }
    })
}

async function execute() {
    try {
        await sendCmd("ls")
    } catch(e) {
        console.error(`Worker.execute() broke: ${e}`)
    }
}
execute()

const job = new CronJob(process.env.WORKER_CRON, execute)
job.start()

const deleteOld = () => logger.deleteOld(parseInt(process.env.DAYS_AGO))
deleteOld()
const cleanup = new CronJob(process.env.DELETE_CRON, deleteOld)
cleanup.start()