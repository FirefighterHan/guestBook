const express = require('express')

const router = express.Router()

router.get('/', (req, res)=>{
    res.json({mssg: 'GET all message'})
})

router.get('/:id', (req, res)=>{
    res.json({mssg: 'GET a single message'})
})

router.post('/', (req, res)=>{
    res.json({mssg: 'POST a new message'})
})

router.delete('/:id', (req, res)=>{
    res.json({mssg: 'DELETE a message'})
})

router.patch('/:id', (req, res)=>{
    res.json({mssg: 'UPDATE a message'})
})

module.exports = router