import { querySchema } from "./query.schema.js";

export const queryValidation = async (req, res, next) => {
    const value = await querySchema.validate(req.body);
    if (value.error) {
        res.json({
            message: value.error.details[0].message
        })
    } else {
        next();
    }
}