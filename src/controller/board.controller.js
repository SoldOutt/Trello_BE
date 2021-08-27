const boardService = require('../services/board.service')

const boardController = {
    async createNew(req, res) {
        try {
            const result = await boardService.createNew(req.body)
            console.log(result)
            res.json({ status: 'true', data: result })
        } catch (error) {
            res.status(400).json({ status: 'false', message: error.message })
        }
    },
}
module.exports = boardController
