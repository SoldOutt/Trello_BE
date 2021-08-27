const { getDB } = require('../config/mongodb')
const Joi = require('joi')

const boardCollectionName = 'Boards'
const boardCollectionSchema = Joi.object({
    title: Joi.string().min(3).max(30).required(),
    columnOrder: Joi.array().items(Joi.string().min(3).max(20)).default([]),
    createdAt: Joi.date().timestamp().default(Date.now()),
    updatedAt: Joi.date().timestamp().default(null),
    destroyedAt: Joi.date().timestamp().default(null),
})
const validateSchema = async (data) => {
    return await boardCollectionSchema.validateAsync(data, {
        abortEarly: false,
    })
}
const createNew = async (data) => {
    try {
        const value = await validateSchema(data)
        console.log(value, data)
        const result = await getDB()
            .collection(boardCollectionName)
            .insertOne(value)
        console.log(result)
        return result
    } catch (err) {
        throw new Error(err)
    }
}
module.exports = { createNew }
