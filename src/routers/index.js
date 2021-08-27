const express = require('express')
const router = express.Router()
const boardRouter = require('./board.route')
router.use('/board', boardRouter)

module.exports = router
