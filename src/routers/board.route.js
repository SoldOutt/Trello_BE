const express = require('express')
const router = express.Router()
const boardController = require('../controller/board.controller')
const boardValidation = require('../validation/board.validation')
const authMiddleware = require('../middleware/auth.middleware')
router
    .route('/')
    .get(authMiddleware.verifytoken, boardController.getAllBoard)
    .post(
        authMiddleware.verifytoken,
        boardValidation.createNew,
        boardController.createNew
    )
router
    .route('/:id')
    .get(authMiddleware.verifytoken, boardController.getFullBoard)
    .put(authMiddleware.verifytoken, boardController.updateOne)
module.exports = router
