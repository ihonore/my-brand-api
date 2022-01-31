import mongoose from "mongoose"
import validator from 'validator'

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Please tell us your name!']
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email']
    },
    photo: {type: String,
    default:"https://www.sibberhuuske.nl/wp-content/uploads/2016/10/default-avatar.png" },

    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 8,
    }
  });
  
  export default mongoose.model('User', userSchema)
