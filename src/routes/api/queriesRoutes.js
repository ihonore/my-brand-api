import express from 'express'
import { QueryController } from './../../controllers/queriesController.js'
import { authenticate } from '../../middlewares/authenticate.js';
import { queryValidation } from '../../validations/queryValidation/query.validation.js';

const router = express.Router()
const queryControllers = new QueryController()
router.post('/',queryValidation, queryControllers.createQuery)
router.get('/',authenticate, queryControllers.getAllQueries)
router.get('/:id', authenticate,queryControllers.getQuery)
router.delete('/:id',authenticate, queryControllers.deleteQuery)

export default router