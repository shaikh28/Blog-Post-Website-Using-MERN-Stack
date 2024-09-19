const mongoose = require('mongoose')

const blogPostSchema = new  mongoose.Schema({
    title:{type:String, required:true},
    summary:{type:String},
    content:{type:String,required:true},
    createdAt:{type:Date,default:Date.now}
})

const BlogPost = mongoose.model('blogPost',blogPostSchema)
module.exports = BlogPost