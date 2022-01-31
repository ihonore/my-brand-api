import  express  from "express";

import { CommentController } from './../../controllers/commentsController.js'

const route = express.Router()
const commentsControllers = new CommentController()
route.post('/:articleId', commentsControllers.createComment)
route.get('/:articleId', commentsControllers.getAllArticleComments)

export default route