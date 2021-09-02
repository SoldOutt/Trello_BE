const boardService = require('../services/board.service')

const boardController = {
    async createNew(req, res) {
        try {
            const result = await boardService.createNew(req.body)

            res.json({ status: 'true', data: result })
        } catch (error) {
            res.status(400).json({ status: 'false', message: error.message })
        }
    },
    async getFullBoard(req, res) {
        try {
            const id = req.params.id
            const result = await boardService.getFullBoard(id)

            res.json({ status: 'true', data: result })
        } catch (error) {
            console.log(error.message)

            res.status(500).json({ status: 'false', message: error.message })
        }
    },
    async updateOne(req, res) {
        try {
            console.log(req.params.id, req.body)
            const id = req.params.id
            const result = await boardService.updateOne(id, req.body)
            // res.status(500).json({ message: 'error hahaha' })
            res.json({ status: 'true', data: result })
        } catch (error) {
            console.log(error.message)

            res.status(500).json({ status: 'false', message: error.message })
        }
    },
}
module.exports = boardController
