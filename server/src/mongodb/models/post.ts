import {Document, Schema, model} from 'mongoose';

export interface IPost extends Document {
  name: string;
  prompt: string;
  photo: string;
}

const Post: Schema = new Schema<IPost>({
  name: {type: String, required: true},
  prompt: {type: String, required: true},
  photo: {type: String, required: true},
});

const PostSchema = model<IPost>('Post', Post);

export default PostSchema;
