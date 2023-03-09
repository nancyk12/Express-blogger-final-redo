const express = require('express');
const router = express.Router();

const Blog = require('./model/Blogs');

/* GET home page. */
router.get('/', async function(req, res) {

  //query blogs
  try {
    const allBlogs = await Blog.find({});
      res.json({blogs: allBlogs });
  } catch(e){
    console.log(e);
  }
  res.render('index', { title: 'Express Blogger Mongoose' });
});

router.post

module.exports = router;
