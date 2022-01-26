import express from 'express'

const route = express.Router()

route.get('/', (req, res, next) => {
    res.status(200).json({ status: 200, message: "this will return all users", data: "" })
})

export default route