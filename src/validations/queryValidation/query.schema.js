import joi from 'joi'

export const querySchema = joi.object({
    senderName: joi.string().max(50).required().messages({
        "string.base": "Sorry! It looks like something went wrong. Please try later",
        "string.pattern.base": "Name must be below 50 characters",
        "string.empty": "Name is not allowed to be empty",
        "any.required": "Name is required"
    }),
    email: joi.string().email().required().messages({
        "string.base": "Sorry! It looks like something went wrong. Please try later",
        "string.empty": "Email is not allowed to be empty",
        "string.email": "Enter a valid email address",
        "any.required": "Email is required"
    }),
    message:joi.string().max(1000).required().messages({
        "string.base": "Sorry! It looks like something went wrong. Please try later",
        "string.empty": "The message is not allowed to be empty",
        "string.pattern.base": "Message must be below 1000 characters",
        "any.required": "Message is required"
    })
})