import multer from 'multer';
import express from 'express'
import { UserControllers } from '../../controllers/userController.js';
import { fileFilter } from '../../helpers/fileFilter.js';
import { userValidation,userUpdateValidation } from '../../validations/userValidation/user.validation.js';
import { authenticate } from '../../middlewares/authenticate.js';

const route = express.Router()
const storage = multer.diskStorage({});

const uploads = multer({ storage, fileFilter });
const userControllers = new UserControllers()
route.post('/register', uploads.single('picture'), userValidation, userControllers.register)
route.post('/login', userControllers.login)
route.patch('/:email',authenticate,uploads.single('picture'),userUpdateValidation, userControllers.updateUserInfo)
route.delete('/:email',authenticate, userControllers.deleteUser)

export default route