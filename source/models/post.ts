import { Schema, model } from "mongoose";

const postSchema = new Schema({
  author: String,
  title: String,
  body: String,
  published: Boolean,
  date: Number,
});

const User = model("Post", postSchema);

export default User;
