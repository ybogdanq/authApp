import pkg from "mongoose";
const {model, Schema} = pkg

const UserSchema = new Schema({
  email: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  isActivated: {type: Boolean, default: false},
  activationLink: {type: String},
});

export default model("User", UserSchema)