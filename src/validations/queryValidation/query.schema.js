import joi from 'joi'

export const querySchema = joi.object({
    senderName: joi.string().max(50).required(),
    email: joi.string().email().required(),
    message:joi.string().max(1000).required()
})