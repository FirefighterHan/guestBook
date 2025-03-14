const mongoose = require('mongoose')

const Schema = mongoose.Schema

const messageSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, { timestamps: true})

module.exports = mongoose.model('Message', messageSchema)