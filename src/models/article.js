import mongoose from "mongoose"
import Comment from "./comment.js"


const schema = mongoose.Schema({
    title: String,
    content: String,
    image: String,
    create_at: { type: Date, default: Date.now() },
    comments: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}
      ]
})

export default mongoose.model("Article", schema)