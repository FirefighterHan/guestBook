const mongoose = require('mongoose')

const Schema = mongoose.Schema

const messageSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    
})