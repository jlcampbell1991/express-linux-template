module.exports.default = (logger) => async (req, res, f) => {
    const endpoint = `${req.method} ${req.path}`
    await logger.info(endpoint)
    try {
      f(req, res)
    } catch(e) {
      const msg = `${endpoint} failed: ${e}`
      await logger.info(msg)
      res.status(500).send(msg)
    }
  }