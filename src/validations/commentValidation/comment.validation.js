import { commentSchema } from "./comment.schema.js";

export const commentValidation = async (req, res, next) => {
    const value = await commentSchema.validate(req.body);
    if (value.error) {
        res.json({
            message: value.error.details[0].message
        })
    } else {
        next();
    }
}