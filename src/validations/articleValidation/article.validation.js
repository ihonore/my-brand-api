import { articleSchema } from "./article.schema.js";

export const articleValidation = async (req, res, next) => {
    const value = await articleSchema.validate(req.body);
    if (value.error) {
        res.json({
            message: value.error.details[0].message
        })
    } else {
        next();
    }
}