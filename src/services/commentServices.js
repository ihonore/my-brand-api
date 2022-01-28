import Comment from "../models/comment.js";

export const createCommentService = async (data) => {
    const comment = await Comment(data)
    comment.save()
    return comment
}