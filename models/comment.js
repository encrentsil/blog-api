import { model, Schema } from "mongoose";
import {toJSON} from "@reis/mongoose-to-json";

const commentSchema = new Schema ({
    author: {type: String, required: true},
    content: {type: String, required: true},
    likes: {type: Number }
}, {
    timestamps: true
});

commentSchema.plugin(toJSON);

export const CommentModel = model('comment',commentSchema)


