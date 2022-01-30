import  express  from "express";

import { CommentController } from './../../controllers/commentsController.js'

const route = express.Router()
const commentsControllers = new CommentController()
route.post('/comment', commentsControllers.createComment)

export default route