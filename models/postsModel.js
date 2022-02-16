const mongoose = require('mongoose')

const PostsModel = mongoose.model(
    "node-api",
    {
        author:{
            type:String,
            required:true
        },
        message:{
            type: String,
            required:true
        },
        date:{
            type:Date,
            default:Date.now
        }
    },
    "posts" // posts is here the table in our mongodb database
);

module.exports = {PostsModel}