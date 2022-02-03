import { createCommentService, getAllArticleCommentsService } from "../services/commentServices.js"

export class CommentController {
    async createComment(req, res) {
        try {
        
            const data = {
                commenter: req.body.commenter,
                comment: req.body.comment,
            }
            console.log(data)
          
            const comment = await createCommentService(req.params.articleId,data)
            res.status(201).json({ status: 201, message: "Comment created successfully", data: comment })
        } catch (error) {
            res.status(500).json({message: "Internal server error!"})
        }
    }
    async getAllArticleComments(req,res){
        try{
        const articleComments = await getAllArticleCommentsService(req.params.articleId)
        res.status(200).json({ status: 200, message: "These are all the comments of given article", data: articleComments })

        }
      catch (error) {
        res.status(500).json({message: "Internal server error!"})
    }
    }
}