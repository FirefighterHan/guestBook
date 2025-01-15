require('dotenv').config()

const express = require('express')
const messageRoutes = require('./routes/message')
const mongoose = require('mongoose')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next)=> {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/message', messageRoutes)

// connect to db
mongoose.connect(process.env.MONG_URI)
    .then(()=>{
        // listen for request
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port 4000')
        })
    })
    .catch((error)=> {
        console.log(error)
    })