import { Document } from "mongoose";

export default interface Ipost extends Document {
  author: String;
  title: String;
  body: String;
  published: Boolean;
  date: Number;
}
