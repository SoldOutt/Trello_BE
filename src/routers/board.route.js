const express = require('express')
const router = express.Router()
const boardController = require('../controller/board.controller')
const boardValidation = require('../validation/board.validation')
const authMiddleware = require('../middleware/auth.middleware')
router
    .route('/')
    .get(boardController.getAllBoard)
    .post(
        authMiddleware.verifytoken,
        boardValidation.createNew,
        boardController.createNew
    )
router
    .route('/:id')
    .get(boardController.getFullBoard)
    .put(boardController.updateOne)
module.exports = router
