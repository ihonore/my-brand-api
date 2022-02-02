import joi from 'joi'

export const userSchema = joi.object({
    username: joi.string().required().messages({
        "string.base": "Sorry! It looks like something went wrong. Please try later",
        "string.empty": "Username is not allowed to be empty",
        "any.required": "Username is required"
    }),
    email: joi.string().email().required().messages({
        "string.base": "Sorry! It looks like something went wrong. Please try later",
        "string.empty": "Email address is not allowed to be empty",
        "string.email": "Enter a valid email address",
        "any.required": "Email is required"
    }),
    password: joi.string().min(8).max(10)
    .pattern(new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/))
    .required().messages({
        "string.base": "Sorry! It looks like something went wrong. Please try later",
        "string.pattern.base": "Password must atleast have one special character and a number",
        "string.empty": "Password is not allowed to be empty",
        "any.required": "Password is required"
    }),
})

export const userSchemaUpdate =joi.object({
    username:joi.string(),
    email: joi.string().email(),
    password: joi.string().min(8).max(10)
    .pattern(new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/))
    .message("Password must atleast have a special character and a number")

})