const express = require('express')

const port = 3000
const db = require('./config/mongodb')
const boardModel = require('./models/board.model')
db.connectDB()
    .then(() => console.log('connect successfuly to database'))
    .then(() => bootServer())
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })
const bootServer = () => {
    const app = express()
    app.get('/', async (req, res) => {
        const dbIns = db.getDB()
        dbIns.collection
        await dbIns.collection('Boards').insertOne({
            title: 'Nguyen Van Nam',
        })
        res.send('Hello World!')
    })
    app.get('/get', async (req, res) => {
        res.send('Get URL')
    })
    //737ZPie8KpsrjB96
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
}
