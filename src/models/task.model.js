const { getDB } = require('../config/mongodb')
const Joi = require('joi')

const taskCollectionName = 'Tasks'
const taskCollectionSchema = Joi.object({
    boardId: Joi.string().required(),
    columnId: Joi.string().required(),
    title: Joi.string().min(3).max(30).required(),
    cover: Joi.string().default(null),
    createdAt: Joi.date().timestamp().default(Date.now()),
    updatedAt: Joi.date().timestamp().default(null),
    destroyedAt: Joi.date().timestamp().default(null),
})
const validateSchema = async (data) => {
    return await taskCollectionSchema.validateAsync(data, {
        abortEarly: false,
    })
}
const createNew = async (data) => {
    try {
        const value = await validateSchema(data)
        console.log(value, data)
        const result = await getDB()
            .collection(taskCollectionName)
            .insertOne(value)
        console.log(result)
        // return result.ops[0]
    } catch (err) {
        console.log(err)
    }
}
module.exports = { createNew }
