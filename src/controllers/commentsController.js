import { createCommentService } from "../services/commentServices.js"
import {updateArticleCommentsService} from "../services/articleServices.js"

export class CommentController {
    async createComment(req, res) {
        try {
            const data = {
                commenter: req.body.commenter,
                comment: req.body.comment,
            }
            console.log(data)
            const comment = await updateArticleCommentsService(req.params.id,data)
            res.status(200).json({ status: 200, message: "Comment created successfully", data: comment })
        } catch (error) {
            console.log(error)
        }
    }
}