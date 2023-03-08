const express = require("express");
const router = express.Router();
// {}destructuring of the object, grabbing db and making its own variable
//../ leaving folder, ./leaving file
const { db } = require("../mongo");

router.get("./", function (req, res) {
    res.json({message: "Hello World"});
});
//anytime dealing with a database, you need an async function
router.get("/all", async function(req, res) {
    const getAllBlogs = await db().collection('sample_blogs').find();
    res.json({ blogs: getAllBlogs });
});

router.post("/create-one", async function(req, res) {
    const {title, text, author, categories} = req.body
    const newData = {
        title,
        text,
        author,
        categories,
        createdAt: new Date().toISOString(),
        lastModified: new Date().toISOString()
    }
    await db().collection("sample_blogs").insertOne(newData);
    res.json({success: true, message: "added"});

});


    module.exports = router;