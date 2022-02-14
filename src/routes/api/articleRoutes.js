import express from 'express'
import { ArticleController } from './../../controllers/articleController.js'

import multer from 'multer';
import { fileFilter } from '../../helpers/fileFilter.js';
import { authenticate } from '../../middlewares/authenticate.js';
import { articleValidation } from '../../validations/articleValidation/article.validation.js';

const route = express.Router()

const storage = multer.diskStorage({});


const uploads = multer({ storage, fileFilter });
const articleControllers = new ArticleController()

route.post('/', authenticate, uploads.single('image'), articleValidation, articleControllers.createArticle)
route.get('/', articleControllers.getAllArticles)
route.get('/:id', articleControllers.getArticle)
route.patch('/:id', authenticate, uploads.single('image'), articleControllers.updateArticle)
route.delete('/:id', authenticate, articleControllers.deleteArticle)


export default route