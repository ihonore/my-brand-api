import joi from 'joi'

export const articleSchema = joi.object({
    title: joi.string().max(500).required().messages({
        "string.base": "Sorry! It looks like something went wrong. Please try later",
        "string.pattern.base": "Title must be below 500 characters",
        "string.empty": "Title is not allowed to be empty",
        "any.required": "Title is required"
    }),
    content: joi.string().required().messages({
        "string.base": "Sorry! It looks like something went wrong. Please try later",
        "string.empty": "Article content is not allowed to be empty",
        "any.required": "Article content is required"
    })
})