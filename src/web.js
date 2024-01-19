const express = require('express')

const app = express()
app.use(express.urlencoded({ extended: true }))

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT

app.get('/', async (req, res) => {
  try {
    res.send('This is your new app')
  } catch(e) {
    console.error(e)
    res.send(`GET / broke: ${e}`)
  }
})

app.listen(PORT, () => {
  console.log(`New App listening on port ${PORT}`)
})