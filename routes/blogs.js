const { v4: uuidv4 } = require("uuid");
const express = require("express");
const router = express.Router();

const Blog = require('../models/blogs');

/* GET home page. */
router.get('/all', async function(req, res){
    
    //query blogs
    try {
        const allBlogs = await Blog.find({});
        res.json({blogs: allBogs});
    }catch(e){
        console.log(e);
    }
});



//My code (from MongoDB, it's still a work in progress)

// const express = require("express");
// const router = express.Router();
// // {} destructuring of the object, grabbing db and making its own variable
// //../ leaving folder, ./leaving file
// const { db } = require("../mongo");

// router.get("/", function (req, res) {
//     res.json({message: "Hello World"});
// });
// //anytime dealing with a database, you need an async function
// router.get("/all", async function(req, res) {
//     const getAllBlogs = await db()
//     .collection('sample_blogs')
//     .find().toArray();
//     res.json({ blogs: getAllBlogs });
// });

// //get-one/ (GET): returns one blog post
// router.get("/get-one", async function(req, res){
//     const getOnePost = await db()
//     .collection("sample_blogs")
//     .findOne({
//         id: {
//             $exists: true,
//         },
//     });
//     console.log(getOnePost);

//     res.json({
//         success: true,
//         post: getOnePost,
//     });
// });

// ///get-one/:author (GET): returns one blog post given an id
// //in Postman, These are the names I entered "Ronald Barrows", "Paula Boyer", "Brandi Feil", "Dominic Doyle", and "Ginny Gu".
// router.get("/get-one/:author", async function(req, res){
//     const getAuthor = await db()
//     .collection("sample_blogs")
//     .find({author: req.params.author})
//     .toArray(function(err, result){
//         if (err){
//             res.status(400).send("Please enter another author's name.");
//         } else {
//             res.json(result);
//         }
//     });
//     console.log(getAuthor)
//     res.json({
//         success: true,
//         post: getAuthor,
//     });
// }); //

//create-one/ (POST): creates one blog post
router.post("/create-one", async function(req, res) {
    try {
        //parse out files from the POST request
    
    const title = req.body.title
    const text = req.body.text
    const author = req.body.author
    const categories = req.body.category
    const year = req.body.year;

    //pass fields to new Blog model
    //notice how it's way more organized and does the type checking for us
    const newBlog = new Blog({
        title,
        text,
        author,
        categories,
        year
    });

    //save our new entry to the database
    const savedData = await newBlog.save();

    //return the hsuccessful request to the user
    res.json({
        success: true,
        blogs: savedData
    });
} catch(e){
    console.log(typeof e);
    console.log(e);
    res.json({
        error: e.toString(),
    });
}
});
       


    module.exports = router;