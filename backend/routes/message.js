const express = require('express')

const {
    getMessages,
    getMessage,
    createMessage,
    deleteMessage,
    updateMessage
} = require('../controllers/messageController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//require auth for all message routes
router.use(requireAuth)

router.get('/', getMessages)

router.get('/:id', getMessage)

router.post('/', createMessage)

router.delete('/:id', deleteMessage)

router.patch('/:id', updateMessage)

module.exports = router