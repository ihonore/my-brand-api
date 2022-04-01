import  express  from "express";

import { CommentController } from './../../controllers/commentsController.js'
import { commentValidation } from '../../validations/commentValidation/comment.validation.js';

const route = express.Router()
const commentsControllers = new CommentController()
route.post('/:articleId',commentValidation, commentsControllers.createComment)
route.get('/:articleId', commentsControllers.getAllArticleComments)

export default route