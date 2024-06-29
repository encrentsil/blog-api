import mongoose, { model, Schema } from "mongoose";
import {toJSON} from "@reis/mongoose-to-json";




const postSchema = new Schema( {
    title: {type: String, required: true},
    content: {type: String, required: true},
    category: {type: String, enum:['Food', 'Travel', 'Business', 'Technology', 'Lifestyle'], required: true},
    publicationDate: {type: Date, default: Date.now(), required: true,},
    isPublished: {type: Boolean, default: false},
    keywords: [{type: String,}],
     comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comment'} ]

    },{
        timestamps: true
    });

    


    postSchema.plugin(toJSON);

    export const PostModel = model('post', postSchema)