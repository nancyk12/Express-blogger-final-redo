//import mongoose library
const mongoose = require("mongoose");
const {v4: uuidv4} = require("uuid");

//create a blogSchema
const blogSchema = new mongoose.Schema({
    title: String,
    text: String,
    year: Number,
    author: String,
    categories: [String],
    id: {type: String, default: uuidv4()},
    createdAt: { type: Date, default: Date.now }
});

//register model to collectin
const Blog = mongoose.model("sample_blog", blogSchema);

//make our model accessible to outside files
module.exports = Blog;