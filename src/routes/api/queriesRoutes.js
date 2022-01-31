import express from 'express'
import { QueryController } from './../../controllers/queriesController.js'
const router = express.Router()
const queryControllers = new QueryController()
router.post('/', queryControllers.createQuery)
router.get('/', queryControllers.getAllQueries)
router.get('/:id', queryControllers.getQuery)
router.delete('/:id', queryControllers.deleteQuery)

export default router