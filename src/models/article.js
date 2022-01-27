import mongoose from "mongoose"

const schema = mongoose.Schema({
    title: String,
    content: String,
    image: String,
    create_at: Date
})

export default mongoose.model("Article", schema)