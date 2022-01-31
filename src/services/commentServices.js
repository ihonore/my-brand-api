import Article from "../models/article.js"
import Comment from "../models/comment.js"

export const createCommentService = async (id,newComment) => {
    const comment = await Comment(newComment)
    const articleToUpdate = await Article.findById(id);
    console.log(comment)
    articleToUpdate.comments.push(comment)
    await articleToUpdate.save()

    await comment.save()

    return comment
         
}

export const getAllArticleCommentsService = async (id)=>{

    const article= await Article.findById(id)
    const IDs=article.comments
    const comments=Comment.find({'_id':{$in: IDs }})
    
    return comments
}