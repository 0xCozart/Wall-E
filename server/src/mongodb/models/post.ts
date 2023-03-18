import mongoose, {Document, Schema} from 'mongoose';

export interface IPost extends Document {
  name: string;
  prompt: string;
  photo: string;
}

const Post: Schema = new mongoose.Schema({
  name: {type: String, required: true},
  prompt: {type: String, required: true},
  photo: {type: String, required: true},
});

const PostSchema = mongoose.model<IPost>('Post', Post);

export default PostSchema;
