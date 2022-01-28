import mongoose from "mongoose";

const schema = mongoose.Schema({
	senderName: String,
	email: String,
	message: String,
	location: String,
	date_created: { type: Date, default: Date.now() }
});

export default mongoose.model("Query", schema);
