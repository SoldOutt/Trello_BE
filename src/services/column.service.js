const columnModel = require('../models/column.model')
const columnService = {
    async createNew(data) {
        try {
            const result = await columnModel.createNew(data)
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
            const result = await columnModel.updateOne(id, updateData)
            return result
        } catch (error) {
            throw new Error(error)
        }
    },
    async deleteOne(id) {
        try {
            const result = await columnModel.deleteOne(id)
            return result
        } catch (error) {
            throw new Error(error)
        }
    },
}
module.exports = columnService
