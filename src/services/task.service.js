const taskModel = require('../models/task.model')
const taskService = {
    async createNew(data) {
        try {
            const result = await taskModel.createNew(data)
            return result
        } catch (error) {
            throw new Error(error)
        }
    },
    async updateOne(id, data) {
        try {
            const updateData = {
                ...data,
                updatedAt: Date.now(),
            }
            const result = await taskModel.updateOne(id, updateData)
            return result
        } catch (error) {
            throw new Error(error)
        }
    },
    async deleteOne(id) {
        try {
            const result = await taskModel.deleteOne(id)
            return result
        } catch (error) {
            throw new Error(error)
        }
    },
}
module.exports = taskService
