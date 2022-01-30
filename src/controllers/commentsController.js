import { createCommentService } from "../services/commentServices.js"

export class CommentController {
    async createComment(req, res) {
        try {
        
            const data = {
                commenter: req.body.commenter,
                comment: req.body.comment,
            }
            console.log(data)
            const id=req.originalUrl.split('/')[4] //originalUrl: '/api/v1/articles/61f6b48a93d5be124e27b233/comment',
            const comment = await createCommentService(id,data)
            res.status(200).json({ status: 200, message: "Comment created successfully", data: comment })
        } catch (error) {
            console.log(error)
        }
    }
}