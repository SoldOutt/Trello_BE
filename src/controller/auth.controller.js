const authService = require('../services/auth.service')
const authModel = require('../models/auth.model')
const argon2 = require('argon2')
const authController = {
    async createNew(req, res) {
        try {
            const { username, password } = req.body
            if (!username || !password) {
                return res.status(400).json({
                    success: false,
                    message: 'missing username or password',
                })
            }
            const user = await authModel.findByName(username)
            console.log(user, 1)
            if (user) {
                return res.status(400).json({
                    success: false,
                    message: 'user name is already in use',
                })
            }
            const hasPassword = await argon2.hash(password)
            const newUser = { userName: username, password: hasPassword }
            const result = await authService.createNew(newUser)
            return res.json({ success: true, result: result })
        } catch (error) {
            console.log(error.message)
            res.status(400).json({ success: false, error: error.message })
        }
    },
    async login(req, res) {
        try {
            const user = await authModel.findById(req.userId)
        } catch (error) {
            console.log(error.message)
            res.status(400).json({ success: false, error: error.message })
        }
    },
}
module.exports = authController
