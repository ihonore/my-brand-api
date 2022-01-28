import express from 'express'
import { UserController } from './../../controllers/userController.js'
const router = express.Router()
const userControllers = new UserController()

router.route('/')
.post(userControllers.createUser)
.get(userControllers.getAllUsers)

router.route('/:id')
.get(userControllers.getUser)
.patch(userControllers.updateUser)
.delete(userControllers.deleteUser)

export default router