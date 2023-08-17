import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({

    title: {
        type:String,
        required:true
    },
    image: {
        type:String,
        default:null
    },
    taq: {
        type: String,
        required:true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
      }


})

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;