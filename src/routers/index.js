const express = require('express')
const router = express.Router()
const boardRouter = require('./board.route')
const columnRouter = require('./column.route')
const taskRouter = require('./task.route')

router.use('/board', boardRouter)
router.use('/column', columnRouter)
router.use('/task', taskRouter)

module.exports = router
