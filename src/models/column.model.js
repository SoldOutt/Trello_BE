const { getDB } = require('../config/mongodb')
const Joi = require('joi')

const columnCollectionName = 'Columns'
const columnCollectionSchema = Joi.object({
    boardId: Joi.string().required(),
    title: Joi.string().min(3).max(30).required(),
    taskOrder: Joi.array().items(Joi.string().min(3).max(20)).default([]),
    createdAt: Joi.date().timestamp().default(Date.now()),
    updatedAt: Joi.date().timestamp().default(null),
    destroyedAt: Joi.date().timestamp().default(null),
})
const validateSchema = async (data) => {
    return await columnCollectionSchema.validateAsync(data, {
        abortEarly: false,
    })
}
const createNew = async (data) => {
    try {
        const value = await validateSchema(data)
        console.log(value, data)
        const result = await getDB()
            .collection(columnCollectionName)
            .insertOne(value)
        console.log(result)
        // return result.ops[0]
    } catch (err) {
        console.log(err)
    }
}
module.exports = { createNew }
