import mongoose from "mongoose"

const opts = {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
};
const schema = mongoose.Schema(
    {
        username: String,
        email: String,
        password: String,
        picture: String,
    },
    opts
)

export default mongoose.model("User", schema)