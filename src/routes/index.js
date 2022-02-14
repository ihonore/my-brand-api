import express from 'express'
import welcomeRoutes from "./api/welcomeRoutes.js"
import articleRoutes from "./api/articleRoutes.js"
import queriesRoutes from "./api/queriesRoutes.js"
import userRoutes from "./api/userRoutes.js"
import commentRoutes from "./api/commentRoutes.js"

const routes = express.Router()

routes.use('/', welcomeRoutes)
routes.use('/articles', articleRoutes)
routes.use('/queries', queriesRoutes)
routes.use('/users', userRoutes)
routes.use('/comments',commentRoutes)


export default routes