const express = require('express')
const app = express()
require('dotenv').config()





// set our port
const port = process.env.PORT || 1234

// start app ===================================
app.listen(port, () => {
    console.log(`Magic happens on port ${port}`) // notice backwards slashes
})

app.use(function (req, res) {
    res.send('hello from nodemon new deploy')
})