import mongoose from "mongoose";

const postShcema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        location: String,
        description: String,
        picturePath: String,
        userPicturePath: String,
        likes: {
            type: Map,
            of: Boolean,
        },
        comments: {
            types: Array,
            default: []
        }
    }, 
    { timestamps: true }
)

const Post = mongoose.model('Post', postShcema)

export default Post