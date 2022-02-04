import { Document } from "mongoose";

export default interface Ipost extends Document {
  author: string;
  title: string;
  body: string;
  published: boolean;
  date: number;
}
