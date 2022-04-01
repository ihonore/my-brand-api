import joi from 'joi'

export const commentSchema = joi.object({
    commenter: joi.string().max(50).required().messages({
        "string.base": "Sorry! It looks like something went wrong. Please try later",
        "string.pattern.base": "Name must be below 50 characters",
        "string.empty": "Name is not allowed to be empty",
        "any.required": "Name is required"
    }),
    comment: joi.string().required().messages({
        "string.base": "Sorry! It looks like something went wrong. Please try later",
        "string.empty": "Comment is not allowed to be empty",
        "any.required": "Comment is required"
    })
})