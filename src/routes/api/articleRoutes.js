import express from 'express'

const route = express.Router()

route.get('/', (req, res, next) => {
    res.status(200).json({ status: 200, message: "this will return all articles", data: "" })
})

export default route