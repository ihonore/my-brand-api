import joi from 'joi'

export const userSchema = joi.object({
    username: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).max(10)
    .pattern(new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/))
    .message("Password must atleast have a special character and a number").required()
})

export const userSchemaUpdate =joi.object({
    username:joi.string(),
    email: joi.string().email(),
    password: joi.string().min(8).max(10)
    .pattern(new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/))
    .message("Password must atleast have a special character and a number")

})