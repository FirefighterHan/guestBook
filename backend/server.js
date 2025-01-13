require('dotenv').config()

const express = require('express')
const messageRoutes = require('./routes/message')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next)=> {
    console.log(req.path, req.method)
    next()
})

app.use('/api/message', messageRoutes)

// listen for request
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
})