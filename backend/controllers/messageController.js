const Message = require('../models/messageModel')

const mongoose = require('mongoose')

// get all message
const getMessages = async (req, res) => {
    const message = await Message.find({}).sort({createdAt: -1})
    res.status(200).json(message)
}


// get a single message
const getMessage = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such message"})
    }

    const message = await Message.findById(id)

    if (!message) {
        return res.status(404).json({error: "No such workout"})
    }

    res.status(200).json(message)
}


// create a new message
const createMessage = async(req, res) => {
    const {message, category} = req.body

    let emptyFields = []

    if (!message) {
        emptyFields.push('message')
    }
    if (!category) {
        emptyFields.push('category')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }

    // add doc to db
    try {
        const messagePost = await Message.create({message, category})
        res.status(200).json(messagePost)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a message
const deleteMessage = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such message"})
    }

    const message = await Message.findOneAndDelete({_id: id})

    if (!message) {
        return res.status(404).json({error: "No such workout"})
    }

    res.status(200).json(message)
}

// update a message
const updateMessage = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such message"})
    }

    const message = await Message.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!message) {
        return res.status(404).json({error: "No such workout"})
    }

    res.status(200).json(message)
}

module.exports = {
    getMessages,
    getMessage,
    createMessage,
    deleteMessage,
    updateMessage
}