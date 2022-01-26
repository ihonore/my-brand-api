export const welcome = (req, res, next) => {
    res.status(200).json({ status: 200, message: "Welcome to my api", data: "" })
}