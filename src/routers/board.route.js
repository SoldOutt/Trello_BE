const express = require('express')
const router = express.Router()
const boardController = require('../controller/board.controller')
const boardValidation = require('../validation/board.validation')
router
    .route('/')
    .get((req, res) => {
        res.send('board get')
    })
    .post(boardValidation.createNew, boardController.createNew)
router.route('/:id').get(boardController.getFullBoard)
module.exports = router
