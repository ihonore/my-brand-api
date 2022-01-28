import express from 'express'
import { ArticleController } from './../../controllers/articleController.js'
import {CommentController } from  './../../controllers/commentsController.js'

import multer from 'multer';

const route = express.Router()

const storage = multer.diskStorage({});
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb('invalid image file!', false);
    }
};


const uploads = multer({ storage, fileFilter });
const articleControllers = new ArticleController()
const commentControllers= new CommentController()
route.post('/', uploads.single('image'), articleControllers.createArticle)
route.post('/:id/comments',commentControllers.createComment)
route.get('/', articleControllers.getAllArticles)
route.get('/:id', articleControllers.getArticle)
route.put('/:id', uploads.single('image'), articleControllers.updateArticle)
route.patch('/:id', articleControllers.updateArticle)
route.delete('/:id', articleControllers.deleteArticle)


export default route