import { Document } from "mongoose";

export default interface Iuser extends Document {
  username: String;
  password: String;
}
