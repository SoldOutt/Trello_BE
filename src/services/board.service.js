const boardModel = require('../models/board.model')
const boardService = {
    async createNew(data) {
        try {
            const result = await boardModel.createNew(data)
            return result
        } catch (error) {
            throw new Error(error)
        }
    },
}
module.exports = boardService
