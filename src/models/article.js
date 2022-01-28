import mongoose from "mongoose"


const schema = mongoose.Schema({
    title: String,
    content: String,
    image: String,
    create_at: { type: Date, default: Date.now() },
    comments: Array
})

export default mongoose.model("Article", schema)